const { database } = require('../database');

const { TABLES_NAMES } = require('../constants');

const USER_TABLE = TABLES_NAMES.user;

const getAllUsers = async () => {
  const result = await database.query(`select * from ${USER_TABLE}`);

  return result.recordset;
};

const updateUser = async (userId, userData) => {
  const { name, lastname, gender, ci } = userData;

  const ciResult = await database.query`select * from usuarios WHERE Cedula = ${ci}`;

  if (ciResult.rowsAffected[0] > 0 && ciResult.recordset[0].UsuarioId !== userId) {
    throw new Error('Número de cédula ya registrada por otro usuario!');
  }

  const result = await database.query`
  UPDATE usuarios
  SET Nombre = ${name}, Apellido = ${lastname}, Genero = ${gender}, Cedula = ${ci}
  WHERE UsuarioId = ${userId};
`;

  if (!result.rowsAffected === 0) throw new Error('No se pudo actualizar el usuario!');

  return result.recordset;
};

module.exports = {
  userService: {
    getAllUsers,
    updateUser
  }
};
