const { database } = require('../database');

const { auth } = require('../utils');

const login = async (loginData) => {
  const { email, password } = loginData;

  const result = await database.query`select * from Admin WHERE email = ${email}`;

  if (result.rowsAffected[0] < 1) throw new Error('Cuenta no registrada!');

  const isValidPassword = await auth.comparePassword(password, result.recordset[0].password);

  if (!isValidPassword) throw new Error('Contraseña incorrecta');

  const token = auth.generateJWT(result.recordset[0].Id);

  return { token, ...result.recordset[0] };
};

const register = async (adminData) => {
  const { name, email, password } = adminData;

  const _password = await auth.encryptPassword(password);

  const result = await database.query`INSERT INTO Admin VALUES (${name}, ${email}, ${_password})`;

  if (result.rowsAffected[0] === 0) throw new Error('No se pudo registrar la cuenta de admin!');

  return result.recordset;
};

module.exports = {
  adminService: {
    login,
    register
  }
};
