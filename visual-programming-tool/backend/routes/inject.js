const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { data } = req.body;
  // Logic to handle injected data
  res.json({ status: 'success', data });
});

module.exports = router;
