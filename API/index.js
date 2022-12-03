const server = require('./src/App.js');

// conn.sync({ alter: true }).then(() => {
    server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
//   });