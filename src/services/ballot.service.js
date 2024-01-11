const { database } = require('../database');

const { TABLES_NAMES, INSERT_VALUES } = require('../constants');

const BALLOT_TABLE = TABLES_NAMES.ballot;

const getAllBallots = async () => {
  const result = await database.query(`select * from ${BALLOT_TABLE}`);

  return result.recordset;
};

const createBallot = async (ballotBody) => {
  const { dignity, election_date } = ballotBody;

  const { date, user } = INSERT_VALUES;

  const result = await database.query`INSERT INTO papeletas VALUES
  ('Papeleta', ${dignity}, ${election_date}, ${date}, ${date}, ${user}, '')`;

  if (result.rowsAffected[0] === 0) throw new Error('No se pudo crear la papeleta!');

  return result.recordset;
};

const updateBallot = async (ballotBody, id) => {
  const { dignity, election_date } = ballotBody;

  const result = await database.query`
  UPDATE papeletas SET Dignidad = ${dignity}, FechaEleccion = ${election_date}
  WHERE PapeletaId = ${id};
`;

  if (!result.rowsAffected === 0) throw new Error('No se pudo actualizar la papeleta!');

  return result.recordset;
};

const deleteBallot = async (id) => {
  const result = await database.query`delete from papeletas where PapeletaId = ${id}`;

  if (result.rowsAffected[0] === 0) throw new Error('La Papeleta no existe!');

  return result;
};

module.exports = {
  ballotService: {
    getAllBallots,
    createBallot,
    updateBallot,
    deleteBallot
  }
};
