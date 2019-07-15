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

router.post('/accounts', (req, res, next) => {
  res.json({ message: 'Create account' });
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

router.put('/accounts/:id', (req, res, next) => {
  res.json({ message: 'Update account ' + req.params.id });
});

router.delete('/accounts/:id', (req, res, next) => {
  res.json({ message: 'Delete account ' + req.params.id });
});

module.exports = router;
