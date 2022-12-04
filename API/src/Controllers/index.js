const data = require('../../db.json');
const { Users } = require('../db.js');

//Trae los cursos de json
const getAllCourses =  (req, res) => {
   try{
      const cursos = data.cursos;
      cursos.length
        ? res.status(200).json(cursos)
        : res.status(404).json({ message: 'No se encontraron cursos' });
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
}

//Busca el curso por id
const getCourseById = (req, res) => {
    const { id } = req.params;
    const allCourses = [...data.cursos];

    try{
        if(id) {
            const idCourse = allCourses?.find((curso) => curso.id === Number(id));
           
            idCourse
                ? res.status(200).json(idCourse)
                : res.status(404).json({ message: `No se encontró el curso con el número de id ${id}` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
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
        if(id){
            const userId = await Users.findByPk(id);
            userId.active = false;
            await userId.save();
            res.status(200).json({ message: 'Usuario deshabilitado' });
        }
        else if(mail) {
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

//Trae los cursos por categoría
const getCourseByCategory = (req, res) => {
    const { categoria } = req.query;
    const allCourses = [...data.cursos]; // provisorio

    try {
        if(categoria) {
            const categoryCourse = allCourses?.filter((curso) => curso.categoria?.toLowerCase().includes(categoria.toLowerCase()));
            categoryCourse.length
                ? res.status(200).json(categoryCourse)
                : res.status(404).json({ message: `No se encontró el curso con la categoría ${categoria}` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllCourses,
    getCourseById,
    createUser,
    disableUser,
    getCourseByCategory
}