const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;
const {loadCoursesToDB} = require('./src/Controllers/index.js'); 

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    loadCoursesToDB()
    console.log('%s listening at 3001');
  });
});
