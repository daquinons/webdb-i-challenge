const express = require('express');

const router = express.Router();

router.get('/accounts', (req, res, next) => {
  res.json({ message: 'Get all accounts' });
});

router.post('/accounts', (req, res, next) => {
  res.json({ message: 'Create account' });
});

router.get('/accounts/:id', (req, res, next) => {
  res.json({ message: 'Get account with ' + req.params.id });
});

router.put('/accounts/:id', (req, res, next) => {
  res.json({ message: 'Update account ' + req.params.id });
});

router.delete('/accounts/:id', (req, res, next) => {
  res.json({ message: 'Delete account ' + req.params.id });
});

module.exports = router;
