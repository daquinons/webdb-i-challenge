const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.json({ message: 'Get all users' });
});

module.exports = router;
