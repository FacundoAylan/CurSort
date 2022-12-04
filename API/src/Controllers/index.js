const {Courses, Categories} = require('../db.js')

const postCourse = async (req, res) => {
  const {
    name, 
    description,
    instructor,
    duration,
    price,
    image,
    difficulty,
    categories
  } = req.body;
  
  try {
    // valido que existan los datos obligatorios
    if (!name || !description || !price)
      return res.status(400).send('Faltan datos obligatorios.');
  
    const newcourse = await Courses.create({
      name, 
      description,
      instructor,
      duration,
      price,
      image,
      difficulty
    });
  
    // Busco las categorías que coincidan con los que me trae por body
    let categoriesDB = await Categories.findAll({
      where: {name: categories.map(e => e)}
    })
  
    // Creo las relaciones con la tabla Categories
    newcourse.addCategories(categoriesDB);
  
    res.status(200).send("El curso ha sido creado exitosamente!");
  } catch (error) {
    res.status(400).send(error);
  }  
}




const data = require('./api.json')
const { Users, Courses, Categories, Reviews } = require('../db');

//loadCoursesToDB es solo para cargar los cursos del json a la DB
//la ruta en Postman seria http://localhost:3001/course/load
const loadCoursesToDB = async (req, res) => {
    try {
        const coursesDB = await Courses.findAll();
        const coursesJSON = data.cursos;
        if (coursesDB.length === 0 || coursesDB.length < coursesJSON.length) {
            coursesJSON.forEach(async (e, i) => {
                let name, description, rating, image, difficulty;
                name = e.nombre,
                description = e.descripcion,
                instructor = e.instructor,
                duration = e.duracion,
                rating = e.rating,
                image = e.imagen,
                difficulty = e.dificultad

                if (coursesDB.length > 0) {
                    if (!coursesDB[i] || coursesDB[i].dataValues.id !== e.id) {
                        await Courses.create({
                            name,
                            description,
                            rating,
                            image,
                            difficulty
                        })
                    }
                }
                else {
                    await Courses.create({
                        name,
                        description,
                        rating,
                        image,
                        difficulty
                    })
                }
            })
        }
        res.status(200).send("Los cursos han sido cargados")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getCourseById = (req, res) => {
    const { id } = req.params;
    const allCourses = [...data.cursos];

    try {
        if (id) {
            const idCourse = allCourses?.find((curso) => curso.id === Number(id));

            idCourse
                ? res.status(200).json(idCourse)
                : res.status(404).json({ message: `No se encontró el curso con el número de id ${id}` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//trae todos los cursos junto con las reviews asociadas
const getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.findAll({
            include : Reviews
        });

        if (courses.length > 0) {
            return res.status(200).send(courses)
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
            courseId : courseId
        })
        res.status(200).send({ message: "Reseña creada con exito" })
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = {postCourse, getAllCourses, getCourseById, postReview, loadCoursesToDB }

