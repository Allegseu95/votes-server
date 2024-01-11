const { database } = require('../database');

const { TABLES_NAMES } = require('../constants');

const RECORD_TABLE = TABLES_NAMES.record;

const getPendingRecords = async () => {
  const result = await database.query(
    `select * from ${RECORD_TABLE} INNER JOIN Detalles_Acta ON Actas.ActaId = Detalles_Acta.ActaId 
                                  INNER JOIN Candidatos ON Detalles_Acta.CandidatoId = Candidatos.CandidatoId
                                  INNER JOIN JRVs ON Actas.JRVId = JRVs.JRVId
                                  INNER JOIN Papeletas ON Actas.PapeletaId = Papeletas.PapeletaId
                                  where Estado = 0`
  );

  return result.recordset;
};

const getApproveRecords = async () => {
  const result = await database.query(
    `select * from ${RECORD_TABLE} INNER JOIN Detalles_Acta ON Actas.ActaId = Detalles_Acta.ActaId 
                                  INNER JOIN Candidatos ON Detalles_Acta.CandidatoId = Candidatos.CandidatoId
                                  INNER JOIN JRVs ON Actas.JRVId = JRVs.JRVId
                                  INNER JOIN Papeletas ON Actas.PapeletaId = Papeletas.PapeletaId
                                  where state = 'approve'`
  );

  return result.recordset;
};

const updateRecord = async (id, state = 'approve') => {
  const result =
    await database.query`UPDATE Actas SET Estado = 1, state = ${state} WHERE ActaId = ${id};
`;

  if (!result.rowsAffected === 0) throw new Error('No se pudo actualizar el Acta!');

  return result.recordset;
};

module.exports = {
  recordService: {
    getPendingRecords,
    getApproveRecords,
    updateRecord
  }
};
