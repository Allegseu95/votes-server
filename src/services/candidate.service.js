const { database } = require('../database');

const { TABLES_NAMES, INSERT_VALUES } = require('../constants');

const CANDIDATE_TABLE = TABLES_NAMES.candidate;

const getAllCandidates = async () => {
  const result = await database.query(
    `select * from ${CANDIDATE_TABLE} INNER JOIN Papeletas ON Candidatos.PapeletaId = Papeletas.PapeletaId `
  );

  return result.recordset;
};

const createCandidate = async (candidateBody) => {
  const { name, lastname, gender, birthdate, organization, photo, ballotId } = candidateBody;

  const { date, user } = INSERT_VALUES;

  const result = await database.query`INSERT INTO candidatos VALUES
  (${ballotId}, ${name}, ${lastname}, ${gender}, ${birthdate}, ${organization}, ${photo}, ${date}, ${date}, ${user}, '')`;

  if (result.rowsAffected[0] === 0) throw new Error('No se pudo crear el candidato!');

  return result.recordset;
};

const updateCandidate = async (candidateBody, id) => {
  const { name, lastname, gender, birthdate, organization, photo, ballotId } = candidateBody;

  const result = await database.query`
  UPDATE candidatos SET Nombre = ${name}, Apellido = ${lastname}, Genero = ${gender}, FechaNacimiento = ${birthdate}, OrganizacionPolitica = ${organization}, Imagen = ${photo}, PapeletaId = ${ballotId}
  WHERE CandidatoId = ${id};
`;

  if (!result.rowsAffected === 0) throw new Error('No se pudo actualizar el candidato!');

  return result.recordset;
};

const deleteCandidate = async (id) => {
  const result = await database.query`delete from candidatos where CandidatoId = ${id}`;

  if (result.rowsAffected[0] === 0) throw new Error('El Candidato no existe!');

  return result;
};

module.exports = {
  candidateService: {
    getAllCandidates,
    createCandidate,
    updateCandidate,
    deleteCandidate
  }
};
