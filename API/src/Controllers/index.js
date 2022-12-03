const data = require('../../db.json');

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

module.exports = {
    getAllCourses,
    getCourseById
}