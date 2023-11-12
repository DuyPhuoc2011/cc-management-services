const pgp = require('pg-promise')(/* options */)
var env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const db = pgp('postgres://' + config.database.db_user + ':'+ config.database.db_pass +'@' + config.database.db_host + ':' + config.database.db_port + '/' + config.database.db_schema)

module.exports = db;