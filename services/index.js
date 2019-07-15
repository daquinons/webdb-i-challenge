const express = require("express");

const router = express.Router();

router.get('/api', (req, res, next) => {
  res.json({ message: "API is up"});
});

module.exports = router;
