const { database } = require('../database');

const { TABLES_NAMES } = require('../constants');

const JRV_BALLOT_TABLE = TABLES_NAMES.jrv_ballot;

const getAll = async () => {
  const result = await database.query(
    `select * from ${JRV_BALLOT_TABLE} INNER JOIN papeletas ON JRVs_Papeletas.PapeletaId = papeletas.PapeletaId`
  );

  return result.recordset;
};

module.exports = {
  jrvBallotService: {
    getAll
  }
};
