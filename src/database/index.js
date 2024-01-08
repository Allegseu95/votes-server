const sql = require('mssql');
const { env } = require('../config');

const sqlConfig = {
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  server: env.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const dataBaseConnect = async () => {
  try {
    await sql.connect(sqlConfig);
    console.log('DATABASE connected!');
  } catch (error) {
    console.log('DATABASE connection error', err);
  }
};

module.exports = {
  dataBaseConnect,
  database: sql
};
