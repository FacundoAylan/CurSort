require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
} = process.env;

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cursort`, {
   logging: false, 
   native: false, 
 });
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Users, Courses, Categories, Reviews } = sequelize.models;

Courses.belongsToMany(Users, {through: 'users_courses', timestamps: false});
Users.belongsToMany(Courses, {through: 'users_courses', timestamps: false});

Categories.belongsToMany(Courses, {through: 'courses_categories', timestamps: false});
Courses.belongsToMany(Categories, {through: 'courses_categories', timestamps: false});

Reviews.belongsTo(Courses);
Courses.hasMany(Reviews);

module.exports = {
  ...sequelize.models, 
  conn: sequelize     
};
