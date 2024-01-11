const { database } = require('../database');

const { TABLES_NAMES, INSERT_VALUES } = require('../constants');

const REQUEST_TABLE = TABLES_NAMES.request;

const getAllRequests = async () => {
  const result = await database.query(`select * from ${REQUEST_TABLE}`);

  return result.recordset;
};

const approveRequest = async (id, userData) => {
  const { name, lastname, gender, ci, email } = userData;

  const { date, user } = INSERT_VALUES;

  const ciResult = await database.query`select * from usuarios WHERE Cedula = ${ci}`;

  if (ciResult.rowsAffected[0] > 0) throw new Error('Número de cédula ya registrada!');

  const result = await database.query`UPDATE AspNetUsers SET aprobado = 1 WHERE Id = ${id}`;

  if (result.rowsAffected[0] === 0) throw new Error('La Solicitud no existe!');

  const insertResult = await database.query`INSERT INTO usuarios VALUES
  (${name}, ${lastname}, ${gender}, ${ci}, ${email}, ${date}, ${date}, ${user}, '', ${id})`;

  if (insertResult.rowsAffected[0] === 0) throw new Error('No se pudo aprobar la solicitud!');

  return insertResult.recordset;
};

const deleteRequest = async (id) => {
  await database.query`delete from usuarios where UsuarioCredencialId = ${id}`;

  const result = await database.query`delete from AspNetUsers where Id = ${id}`;

  if (result.rowsAffected[0] === 0) throw new Error('La Solicitud no existe!');

  return result;
};

module.exports = {
  requestService: {
    getAllRequests,
    deleteRequest,
    approveRequest
  }
};
