const Json = require('./api.json')

function getAllApi() {
    api = Json
    // let api;
    // api = await axios.get('./api.json')
    // console.log(Json)
    return api
}

// const getAllDB = async () => {
//     // db = await Recipe.findAll({
//     //     include: Diet
//     // })
//     return db;
// }

// const getAll = async () => {
//     let callApi = await getAllApi();
//     let callDb = await getAllDB()

//     let filteredCallApi = callApi.data.results.map(e => {
//         let stepsBySteps = [];
//         let allDiets = [];
//         e.analyzedInstructions.forEach(e => {
//             e.steps.forEach(a => {
//                 stepsBySteps.push(a.step)
//             })
//         });;
//         e.vegetarian ? allDiets.push("VEGETARIAN") : null;
//         e.vegan ? allDiets.push("VEGAN") : null
//         e.glutenFree ? allDiets.push("GLUTEN FREE") : null
//         e.diets.forEach(a => {
//             allDiets.push(a.toUpperCase())
//         });
//         allDiets = [...new Set(allDiets)]

//         return {
//             id: e.id,
//             name: e.title,
//             image: e.image,
//             summary: e.summary,
//             healthScore: e.healthScore,
//             dishTypes: e.dishTypes.length >= 1 ? e.dishTypes : "No existen platos relacionados",
//             steps: stepsBySteps,
//             diets: allDiets.length >= 1 ? allDiets.join(", ") : "No hay dietas relacionadas"
//         }
//     })

//     let filteredCallDb = callDb.map(e => {
//         let allDiets = e.dataValues.diets.map(e => e.dataValues.name);
//         return {
//             id: e.dataValues.id,
//             name: e.dataValues.name,
//             summary: e.dataValues.summary,
//             healthScore: e.dataValues.healthScore,
//             dishTypes: e.dataValues.dishTypes !== null ? e.dataValues.dishTypes : "No existen platos relacionados",
//             steps: e.dataValues.steps,
//             diets: allDiets.length >= 1 ? allDiets.join(", ") : "No hay dietas relacionadas",
//             image: e.dataValues.image
//         }
//     })
//     return cleanDataApiDb = [...filteredCallApi, ...filteredCallDb];
// }

module.exports = getAllApi