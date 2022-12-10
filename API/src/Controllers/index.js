
const { Op } = require("sequelize");
const data = require('./api.json');
const { Users, Courses, Categories, Reviews } = require('../db');

const postCourse = async (req, res) => {
    const {
        nombre ,
        descripcion ,
        instuctor ,
        duracion ,
        precio ,
        imagen ,
        dificultad,
        categoria
    } = req.body;

    let name, description, instructor, duration, price, image, difficulty, categoryId;

    name =nombre.toUpperCase();
    description = descripcion;
    instructor = instuctor;
    duration = duracion;
    price = precio;
    image = imagen;
    difficulty = dificultad;
    categoryId = categoria

    try {
        // valido que existan los datos obligatorios
        if (!name || !description)
            return res.status(400).send('Faltan datos obligatorios.');

        const newcourse = await Courses.create({
            name,
            description,
            instructor,
            duration,
            price,
            image,
            difficulty,
            categoryId
        });

        // Busco las categorías que coincidan con los que me trae por body
        //let categoriesDB = await Categories.findAll({
          //  where: { name: categories.map(e => e) }
        //})

        // Creo las relaciones con la tabla Categories
        //newcourse.addCategories([1]);

        res.status(200).send("El curso ha sido creado exitosamente!");
    } catch (error) {
        res.status(400).send(error);
    }
}


//loadCoursesToDB es solo para cargar los cursos del json a la DB
//la ruta en Postman seria http://localhost:3001/course/load
const loadCoursesToDB = async () => {
        const coursesDB = await Courses.findAll();
        const coursesJSON = data.cursos;
        const categoriesJSON = data.categorys;
        const categoriesDB = await Categories.findAll();

        if(categoriesDB.length === 0){
            categoriesJSON.forEach(async e=>{
                
            await Categories.create({
                name: e.name
            })
            })

        }

        if (coursesDB.length === 0 ) {
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
                    price = e.precio;
                    categoryId = parseInt(e.idCategoria);
                    
                    await Courses.create({
                        name,
                        description,
                        instructor,
                        price,
                        duration,
                        rating,
                        image,
                        difficulty,
                        price,
                        categoryId
                        
                    });            
            })
        }

        
}


//funcion para buscar el nombre del curso que recibio por query
const findByName = async (name) => {
    let courses = await Courses.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        },
        include: [
            {
                model: Categories,
                attributes:['name']
            }
        ]
    });
    return courses;
}

const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const course = await Courses.findByPk(id);
            if (course) {

                res.status(200).json(course);
            } else {
                res.status(404).json({ message: `No se encontró el curso con el número de id ${id}` });
            }
        } else {
            res.status(400).json({ message: 'No se ingresó un id' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//trae todos los cursos junto con las reviews asociadas
const getAllCourses = async (req, res) => {
    try {
        let name = req.query.name;
        let courses;
        if (name) {
            name = name.toUpperCase()
            courses = await findByName(name)
        }
        else {
            courses = await Courses.findAll({
                include:[
                    {
                        model: Categories,
                        attributes:['name']
                    }
                ]
            });
        }
        if (courses.length > 0) {

            let curso = courses.map(el => el.toJSON()).map(el => {
                el.category = el.category.name
                return el
            }
            );

            return res.status(200).send(curso)
        }
        res.status(404).send({ message: 'No se encontraron cursos' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

//se postea una review y se asocia con el ID del curso
const postReview = async (req, res) => {
    try {
        let { name, text, rating, courseId } = req.body;
        const newReview = await Reviews.create({
            name,
            text,
            rating,
            courseId: courseId
        })
        res.status(200).send({ message: "Reseña creada con exito" })
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

//Crear un nuevo usuario (ruta de prueba para deshabilitar usuarios)
const createUser = async (req, res) => {
    const { name, lastname, password, mail, birthday } = req.body;
    try {
        const user = await Users.create({
            name,
            lastname,
            password,
            mail,
            birthday
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//Deshabilita el usuario por mail o id
const disableUser = async (req, res) => {
    const { mail, id } = req.query;

    try {

        if (id) {

            const userId = await Users.findByPk(id);
            userId.active = false;
            await userId.save();
            res.status(200).json({ message: 'Usuario deshabilitado' });
        }

        else if (mail) {

            const userMail = await Users.findOne({ where: { mail } });
            userMail.active = false;
            await userMail.save();
            res.status(200).json({ message: 'Usuario deshabilitado' });

        }

        else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCategories = async (req, res) => {
   try{
     const categories = await Categories.findAll();

     if (categories.length > 0){
        res.status(200).json(categories);
     }else{
        res.status(404).send("no se encontraron categorias")
    }
   }catch (error) {
     res.status(400).send(`ocurrio un error ${error}`);
   }

}

const postCategorie = async (req, res) => {
    
    try{
        const categorie   = await Categories.create(req.body);
        res.send(categorie);
    }catch(error){
        res.status(400).send(`ocurrio un error ${error}`);
    } 
}


module.exports = {postCourse, getAllCourses, getCourseById, postReview, loadCoursesToDB, createUser, disableUser, getCategories,postCategorie}


