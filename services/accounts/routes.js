const express = require('express');

const router = express.Router();

const controller = require('./controllers');

const middleware = require('./middleware');

router.get('/accounts', async (req, res, next) => {
  try {
    const accounts = await controller.getAllAccounts();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.post(
  '/accounts',
  middleware.validateAccountBody,
  async (req, res, next) => {
    try {
      const { name, budget } = req.accountBody;
      const createdAccount = await controller.createAccount({
        name,
        budget
      });
      res.status(201).json(createdAccount);
    } catch (error) {
      res.status(500).json({ message: 'There was an error' });
    }
  }
);

router.get('/accounts/:id', middleware.validateId, async (req, res, next) => {
  try {
    const account = req.requestedAccount;
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.put(
  '/accounts/:id',
  [middleware.validateId, middleware.validateAccountBody],
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const { name, budget } = req.accountBody;
      const updatedAccount = await controller.updateAccountWithId(id, {
        name,
        budget
      });
      res.json(updatedAccount);
    } catch (error) {
      res.status(500).json({ message: 'There was an error' });
    }
  }
);

router.delete(
  '/accounts/:id',
  middleware.validateId,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const numberOfDeletedAccounts = await controller.deleteAccountWithId(id);
      res.json({
        message: `Deleted ${numberOfDeletedAccounts} ${
          numberOfDeletedAccounts === 1 ? 'account' : 'accounts'
        }`
      });
    } catch (error) {
      res.status(500).json({ message: 'There was an error' });
    }
  }
);

module.exports = router;
