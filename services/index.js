const express = require('express');

const router = express.Router();

const accountsService = require('./accounts');

router.get('/api', (req, res, next) => {
  res.json({ message: 'API is up' });
});

router.use('/api', accountsService);

module.exports = router;
