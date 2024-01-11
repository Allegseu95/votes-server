const { database } = require('../database');

const { TABLES_NAMES, INSERT_VALUES } = require('../constants');

const JRV_TABLE = TABLES_NAMES.jrv;

const getAllJrvs = async () => {
  const result = await database.query(
    `select * from ${JRV_TABLE} INNER JOIN usuarios ON Jrvs.UsuarioId = usuarios.UsuarioId`
  );

  return result.recordset;
};

const createJrv = async (jrvBody) => {
  const {
    number,
    gender,
    address,
    place,
    zone,
    parish,
    typeParish,
    canton,
    district,
    province,
    number_of_voters,
    userId,
    ballotsId
  } = jrvBody;

  const { date, user } = INSERT_VALUES;

  const result = await database.query`INSERT INTO jrvs OUTPUT INSERTED.JRVId VALUES
  (${number}, ${gender}, ${address}, ${place}, ${zone}, ${parish}, ${typeParish}, ${canton}, ${district}, ${province}, ${number_of_voters}, ${date}, ${date}, ${user}, '', ${userId})`;

  if (result.rowsAffected[0] === 0) throw new Error('No se pudo crear la JRV!');

  for (const id of ballotsId) {
    await database.query`INSERT INTO JRVs_Papeletas VALUES (${result.recordset[0].JRVId}, ${id}, ${date}, ${date}, ${user}, '')`;
  }

  return result.recordset;
};

const updateJrv = async (jrvBody, id) => {
  await database.query`delete from JRVs_Papeletas where JRVId = ${id}`;

  const {
    number,
    gender,
    address,
    place,
    zone,
    parish,
    typeParish,
    canton,
    district,
    province,
    number_of_voters,
    userId,
    ballotsId
  } = jrvBody;

  const { date, user } = INSERT_VALUES;

  for (const ballotId of ballotsId) {
    await database.query`INSERT INTO JRVs_Papeletas VALUES (${id}, ${ballotId}, ${date}, ${date}, ${user}, '')`;
  }

  const result = await database.query`
  UPDATE Jrvs SET Numero = ${number}, Genero = ${gender}, DireccionRecinto = ${address}, Recinto = ${place}, ZonaElectoral = ${zone}, Parroquia = ${parish}, TipoParroquia = ${typeParish}, Canton = ${canton}, Circunscripcion = ${district}, Provincia = ${province}, CantidadVotantes = ${number_of_voters}, UsuarioId = ${userId}
  WHERE JRVId = ${id};
`;

  if (!result.rowsAffected === 0) throw new Error('No se pudo actualizar ls JRV!');

  return result.recordset;
};

const deleteJrv = async (id) => {
  await database.query`delete from JRVs_Papeletas where JRVId = ${id}`;

  const result = await database.query`delete from jrvs where JRVId = ${id}`;

  if (result.rowsAffected[0] === 0) throw new Error('La JRV no existe!');

  return result;
};

module.exports = {
  jrvService: {
    getAllJrvs,
    createJrv,
    updateJrv,
    deleteJrv
  }
};
