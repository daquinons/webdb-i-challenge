const express = require('express');

const router = express.Router();

const accountsController = require('./controllers');

router.get('/accounts', async (req, res, next) => {
  try {
    const accounts = await accountsController.getAllAccounts();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.post('/accounts', async (req, res, next) => {
  try {
    const { name, budget } = req.body;
    const createdAccount = await accountsController.createAccount({
      name,
      budget
    });
    res.status(201).json(createdAccount);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.get('/accounts/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const account = await accountsController.getAccountWithId(id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.put('/accounts/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, budget } = req.body;
    const updatedAccount = await accountsController.updateAccountWithId(id, {
      name,
      budget
    });
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

router.delete('/accounts/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const numberOfDeletedAccounts = await accountsController.deleteAccountWithId(id);
    res.json({
      message: `Deleted ${numberOfDeletedAccounts} ${
        numberOfDeletedAccounts === 1 ? 'account' : 'accounts'
      }`
    });
  } catch (error) {
    res.status(500).json({ message: 'There was an error' });
  }
});

module.exports = router;
