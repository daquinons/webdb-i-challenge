const db = require('../../data/dbConfig');

const TABLE_NAME = 'accounts';

exports.findAll = () => {
  return db(TABLE_NAME);
};

exports.findAccountWithId = id => {
  return db(TABLE_NAME).where({ id: id }).first();
};
