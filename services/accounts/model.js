const db = require('../../data/dbConfig');

const TABLE_NAME = 'accounts';

exports.findAll = config => {
  if (config && Number(config.limit) && config.sortby && config.sortdir) {
    return db(TABLE_NAME)
      .limit(config.limit)
      .orderBy(config.sortby, config.sortdir);
  } else {
    return db(TABLE_NAME);
  }
};

exports.findAccountWithId = id => {
  return db(TABLE_NAME)
    .where({ id: id })
    .first();
};

exports.insert = ({ name, budget }) => {
  return db(TABLE_NAME).insert({ name, budget });
};

exports.update = (id, { name, budget }) => {
  return db(TABLE_NAME)
    .where({ id })
    .update({ name, budget });
};

exports.delete = id => {
  return db(TABLE_NAME)
    .where({ id })
    .del();
};
