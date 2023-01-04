const { Op } = require("sequelize");
const data = require("./api.json");
const { Users, Courses, Categories, Reviews, Orders } = require("../db");
const nodemailer = require("nodemailer");
const { CLIENT_STRIPE_KEY } = process.env;
const Stripe = require("stripe");
const stripe = new Stripe(CLIENT_STRIPE_KEY);

const postCourse = async (req, res) => {
  const {
    nombre,
    descripcion,
    instuctor,
    duracion,
    precio,
    imagen,
    dificultad,
    categoria,
  } = req.body;

  let name,
    description,
    instructor,
    duration,
    price,
    image,
    difficulty,
    categoryId;

  name = nombre.toUpperCase();
  description = descripcion;
  instructor = instuctor;
  duration = duracion;
  price = precio;
  image = imagen;
  difficulty = dificultad;
  categoryId = categoria;

  try {
    // valido que existan los datos obligatorios
    if (!name || !description)
      return res.status(400).send("Faltan datos obligatorios.");

    const newcourse = await Courses.create({
      name,
      description,
      instructor,
      duration,
      price,
      image,
      difficulty,
      categoryId,
    });

    res.status(200).send("El curso ha sido creado exitosamente!");
  } catch (error) {
    res.status(400).send(error);
  }
};

//loadCoursesToDB es solo para cargar los cursos del json a la DB
//la ruta en Postman seria http://localhost:3001/course/load

const loadCoursesToDB = async () => {
  const coursesDB = await Courses.findAll();
  const coursesJSON = data.cursos;
  const categoriesJSON = data.categorias;

  categoriesJSON.map(e => Categories.findOrCreate({
    where: {
      id: e.id,
      name: e.name
    }
  }))

  if (coursesDB.length === 0) {
    coursesJSON.forEach(async (e) => {
      let name, description, rating, image, difficulty, price, categoryId;

      name = e.nombre.toUpperCase();
      description = e.descripcion;
      instructor = e.instructor;
      price = e.precio;
      duration = e.duracion;
      rating = e.rating;
      image = e.imagen;
      difficulty = e.dificultad;
      categoryId = parseInt(e.idCategoria);

      const newcourse = await Courses.create({
        name,
        description,
        instructor,
        price,
        duration,
        rating,
        image,
        difficulty,
      });

      newcourse.addCategories(categoryId)
    });
  }
};

//funcion para buscar el nombre del curso que recibio por query
const findByName = async (name) => {
  let courses = await Courses.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
    include: [
      {
        model: Categories,
        attributes: ["name"],
      },
    ],
  });
  return courses;
};

const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const course = await Courses.findByPk(id);
      if (course) {
        res.status(200).json(course);
      } else {
        res.status(404).json({
          message: `No se encontró el curso con el número de id ${id}`,
        });
      }
    } else {
      res.status(400).json({ message: "No se ingresó un id" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//trae todos los cursos junto con las reviews asociadas ==> traía
//agregue las categorias y saque el review porque no se como poner 2 :P
const getAllCourses = async (req, res) => {
  try {
    let name = req.query.name;
    let courses;
    if (name) {
      name = name.toUpperCase();
      courses = await findByName(name);
    } else {
      courses = await Courses.findAll({
        include: Categories,
      });
    }
    courses = courses.map((c) => {
      return {
        id: c.id,
        name: c.name,
        description: c.description,
        instructor: c.instructor,
        duration: c.duration,
        price: c.price,
        fecha: c.fecha,
        rating: c.rating,
        image: c.image,
        active: c.active,
        difficulty: c.difficulty,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
        categories: c.categories.map((c) => c.name),
      };
    });

    if (courses.length > 0) {
      return res.status(200).send(courses);
    }
    res.status(404).send({ message: "No se encontraron cursos" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//se postea una review y se asocia con el ID del curso
const postReview = async (req, res) => {
  try {
    let { name, text, rating, courseId } = req.body;
    const newReview = await Reviews.create({
      name,
      text,
      rating,
      courseId: courseId,
    });
    res.status(200).send({ message: "Reseña creada con exito" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//Crear un nuevo usuario (ruta de prueba para deshabilitar usuarios)
const createUser = async (req, res) => {
  const user = req.body;

  console.log(user.email);

  let name, lastname, email, email_verified, birthday;

  name = user.given_name || user.name;
  lastname = user.family_name || "";
  email = user.email;
  email_verified = user.email_verified;
  birthday = "";
  admin = false,
  active = true

  try {
    const [usuario,craeted] = await Users.findOrCreate(
      {
        where : {email: user.email},
        defaults: {
          name,
          lastname,
          email,
          email_verified,
          birthday,
          admin,
          active
        }

      });
    res.status(200).json({usuario, craeted});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Deshabilita el usuario por mail o id
const disableUser = async (req, res) => {
  const { mail, id } = req.query;

  try {
    if (id) {
      const userId = await Users.findByPk(id);
      userId.active = false;
      await userId.save();
      res.status(200).json({ message: "Usuario deshabilitado" });
    } else if (mail) {
      const userMail = await Users.findOne({ where: { mail } });
      userMail.active = false;
      await userMail.save();
      res.status(200).json({ message: "Usuario deshabilitado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();

    if (categories.length > 0) {
      res.status(200).json(categories);
    } else {
      res.status(404).send("no se encontraron categorias");
    }
  } catch (error) {
    res.status(400).send(`ocurrio un error ${error}`);
  }
};

const postCategory = async (req, res) => {
  const { name } = req.body;
  try {
    await Categories.create({ name });
    res.status(200).send("La categoría ha sido creada con éxito.");
  } catch (error) {
    res.status(400).send(`ocurrio un error ${error}`);
  }
};

//filtra cursos por categorias
const getCoursesByCategory = async (req, res) => {
  const { id } = req.query;
  const courses = await Courses.findAll({
    include: {
      model: Categories,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });

  if (id) {
    const filterCategory = courses.filter((course) =>
      course.categories.find((categorie) => categorie.id == id)
    );

    if (filterCategory.length) {
      res.send(filterCategory);
    } else {
      res.status(404).send("No se encontraron cursos");
    }
  } else {
    res.status(200).send(courses);
  }
};

//filtra cursos por dificultad
const getCoursesByDifficulty = async (difficulty) => {
  if (difficulty) {
    const courses = await Courses.findAll();
    const filterDifficulty = courses.filter(
      (course) => course.difficulty.toLowerCase() == difficulty.toLowerCase()
    );

    if (filterDifficulty.length) {
      return filterDifficulty;
    } else {
      throw new Error("No se encontraron cursos");
    }
  } else {
    throw new Error("No se ingresó una dificultad");
  }
};

//filtra cursos por duracion
const getCoursesByDuration = async (duration) => {
  if (duration) {
    const courses = await Courses.findAll();
    if (duration == "1A50") {
      const filterDuration = courses.filter(
        (course) => course.duration >= 1 && course.duration <= 50
      );
      if (filterDuration.length) {
        return filterDuration;
      } else {
        throw new Error("No se encontraron cursos");
      }
    } else if (duration == "51A100") {
      const filterDuration = courses.filter(
        (course) => course.duration > 50 && course.duration <= 100
      );
      if (filterDuration.length) {
        return filterDuration;
      } else {
        throw new Error("No se encontraron cursos");
      }
    } else if (duration == "100") {
      const filterDuration = courses.filter((course) => course.duration >= 101);
      if (filterDuration.length) return filterDuration;
    } else {
      throw new Error("No se encontraron cursos");
    }
  } else {
    throw new Error("No se ingresó una duración");
  }
};

const filterCourses = async (req, res) => {
  const { id, difficulty, duration } = req.query;

  // console.log('duration', duration)
  // console.log('difficulty',difficulty)

  try {
    if (id) {
      const courses = await getCoursesByCategory(id);
      res.status(200).json(courses);
    } else if (difficulty) {
      const courses = await getCoursesByDifficulty(difficulty);
      res.status(200).json(courses);
    } else if (duration) {
      const courses = await getCoursesByDuration(duration);
      res.status(200).json(courses);
    } else {
      res.status(200).json("no mando ninguna query");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const contactMail = (req, res) => {
  const {name, mail, message } = req.body;
  
  if(!name)res.status(500).json('Debe incluir el nombre. Vuelva a intenar')
  
  // let newText = `${name} - ${email} - ${content}`
  let html = `<div>
    <h3> Name - ${name}</h3>
    <h3> Mail - ${mail}</h3>
    <h2>Message - ${message}</h2>
  </div>`

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "cursort.2022@gmail.com", // generated ethereal user
      pass: "cghynjlxmrlbasyt", // generated ethereal password
    },
  });

  let mailOption = {
    from: 'Cursort contact', // sender address
    to: "cursort.2022@gmail.com" , // list of receivers
    subject: 'Cotact Form', // Subject line
    // text: newText, // plain text body
    html: html
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      res.status(500).json(error.message);
    } else {
     
      res.status(200).json("Email enviado con exito");
    }
  });
};

//validacion de datos
const validate = ({mail, phone, address, city, postalCode, country}) => {
  const errors = {};
  if (!mail) errors.mail = "El mail es requerido";
  if (!phone) errors.phone = "El teléfono es requerido";
  if (!address) errors.address = "La dirección es requerida";
  if (!city) errors.city = "La ciudad es requerida";
  if (!postalCode) errors.postalCode = "El código postal es requerido";
  if (!country) errors.country = "El país es requerido";

  return errors;
};

// post para guardar los datos del comprador
const postInformationBuyer = async (req, res, next) => {
  const { mail, phone, address, city, postalCode, country} = req.body;

  const errors = validate({mail, phone, address, city, postalCode, country});

  try {
    if (Object.keys(errors).length > 0) {
      return res.status(200).json(errors);
    }

      const buyer = await Users.findOne({
      where: {email: mail },
      })

      buyer.phone = phone
      buyer.address = address
      buyer.city = city
      buyer.postalCode = postalCode
      buyer.country = country
      await buyer.save()
      res.send({message: 'success'})
  
  } catch (error) {
      res.json({ message: error });
  }
};
    
// post para realizar pago
const postPayment = async (req, res, next) => {
  const { id, amount, mail, name, id_courses, course_name } = req.body;
  console.log(req.body)
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: id,
      description: `Pago de ${name} por el curso ${course_name}`,
      confirm: true,
    });

    const buyer = await Users.findOne({
        where: {email: mail }
    })
    
    const course = await Courses.findAll({
        where: {id: id_courses}
    })

    console.log(course)

   const newOrder = await Orders.create({
        status: 'paid',
        amount: amount,
        stripe_id: id,
    })

    await newOrder.addCourse(course)
    await newOrder.addUser(buyer)


    res.send({message: 'success'})

    next();

}
  catch (error) {
    console.log(error)
    res.json({ message: error});
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: Users,
          attributes: ["name", "email"],
        },
        {
          model: Courses,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  postCourse,
  getAllCourses,
  getCourseById,
  postReview,
  loadCoursesToDB,
  createUser,
  disableUser,
  getCategories,
  postCategory,
  getCoursesByCategory,
  getCoursesByDifficulty,
  getCoursesByDuration,
  filterCourses,
  contactMail,
  postPayment,
  postInformationBuyer,
  getOrders
};
