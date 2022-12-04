const data = require('./api.json')
const { Users, Courses, Categories, Reviews } = require('../db');

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

const getAllCourses = async (req, res) => {
    try {
        const cursos = data.cursos;

        if (cursos.length) {
            cursos.forEach(a => {
                let rating;
                if (a.rating === 0) {
                    if (a.reviews.length) {
                        a.reviews.forEach(b => {
                            rating += b.rating
                        })
                        a.rating = rating;
                    }
                }
            })
            res.status(200).send(cursos)
        }
        res.status(404).send({ message: 'No se encontraron cursos' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const postReview = async (req, res) => {
    try {
        let { name, text, rating, courseId } = req.body;
        const newReview = await Reviews.create({
            name,
            text,
            rating,
            courseId
        })
        res.status(200).send({ message: "Reseña creada con exito" })
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = { getAllCourses, getCourseById, postReview, loadCoursesToDB }