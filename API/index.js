const { Sequelize } = require('sequelize');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log('%s listening at 3001');
  });
});

// // conn.sync({ alter: true }).then(() => {
//     server.listen(3001, () => {
//       console.log('%s listening at 3001'); // eslint-disable-line no-console
//     });
// //   });