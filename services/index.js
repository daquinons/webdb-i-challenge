const express = require('express');

const router = express.Router();

const accountsRoutes = require('./accounts/routes');

router.get('/api', (req, res, next) => {
  res.json({ message: 'API is up' });
});

router.use('/api', accountsRoutes);

module.exports = router;
