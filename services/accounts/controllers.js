const Account = require('./model');

exports.getAllAccounts = async (config) => {
  let accounts;
  if (!config) {
    accounts = await Account.findAll();
  } else {
    accounts = await Account.findAll(config);
  }

  return accounts;
};

exports.getAccountWithId = async id => {
  const account = await Account.findAccountWithId(id);

  return account;
};

exports.createAccount = async ({ name, budget }) => {
  const createdAccountIdArray = await Account.insert({ name, budget });
  const createdAccount = await Account.findAccountWithId(
    createdAccountIdArray[0]
  );

  return createdAccount;
};

exports.updateAccountWithId = async (id, { name, budget}) => {
  const updatedId = await Account.update(id, { name, budget });
  const updatedAccount = await Account.findAccountWithId(updatedId);

  return updatedAccount;
};

exports.deleteAccountWithId = async id => {
  const numberOfDeletedAccounts = await Account.delete(id);

  return numberOfDeletedAccounts;
};
