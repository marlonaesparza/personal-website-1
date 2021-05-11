const bluebird = require('bluebird');
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);
const db = bluebird.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => {
    console.log(`Database Connected: ${db.threadId}`);
  })
  .catch((error) => {
    console.log('ERROR, database/connect.js:', error);
  })

module.exports = db;
