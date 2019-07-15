const Accounts = require('./model');

exports.validateId = async (req, res, next) => {
  const id = req.params.id;
  if (Number(id)) {
    const account = await Accounts.findAccountWithId(id);
    if (account) {
      req.requestedAccount = account;
      next();
    } else {
      res.status(404).json({ message: `Account doesn't exist` });
    }
  } else {
    res.status(400).json({ message: 'ID not valid' });
  }
};

exports.validateAccountBody = async (req, res, next) => {
  const { name, budget } = req.body;
  if (!name) {
    res.status(400).json({ message: 'Name is required' });
  } else if (!Number(budget)) {
    res.status(400).json({ message: 'Budget is required' });
  } else {
    req.accountBody = { name, budget };
    next();
  }
};
