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


module.exports = {
  postCourse
}