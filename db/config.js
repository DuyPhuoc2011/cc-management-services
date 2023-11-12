const config = {
  development: {
    database: {
      db_user: 'postgres',
      db_pass: 'Pa55w0rd',
      db_host: 'localhost',
      db_port: '5432',
      db_schema: 'ccmanagement'
    },
  },
  production: {
    database: {
      db_user: '',
      db_pass: '',
      db_host: '',
      db_port: '',
      db_schema: ''
    },
  }
};
module.exports = config