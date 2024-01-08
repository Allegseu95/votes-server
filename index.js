const { env } = require('./src/config');
const { dataBaseConnect } = require('./src/database');
const { app } = require('./src/app');

const init = async () => {
  await dataBaseConnect();

  app.listen(env.NODE_PORT, () => {
    console.log(`Server started on: http://localhost:${env.NODE_PORT}`);
  });
};

init();
