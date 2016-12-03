const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index', { user: req.user.username });
});

module.exports = router;
