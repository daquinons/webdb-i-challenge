const Account = require('./model');

exports.getAllAccounts = async () => {
  const accounts = await Account.findAll();

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
