const Account = require('./model');

exports.getAllAccounts = async () => {
  const accounts = await Account.findAll();

  return accounts;
};

exports.getAccountWithId = async id => {
  const account = await Account.findAccountWithId(id);

  return account;
}
