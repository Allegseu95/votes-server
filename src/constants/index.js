const TABLES_NAMES = {
  request: 'AspNetUsers',
  user: 'Usuarios',
  ballot: 'Papeletas',
  candidate: 'Candidatos',
  jrv: 'JRVs',
  jrv_ballot: 'JRVs_Papeletas',
  record: 'Actas',
  record_details: 'Detalles_Acta'
};

const INSERT_VALUES = {
  date: new Date(),
  user: 'Administrador'
};

module.exports = {
  TABLES_NAMES,
  INSERT_VALUES
};
