const express = require('express');
const { getState, setState } = require('../utils/stateManager');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json(getState());
});

router.post('/pause', (req, res) => {
  const { channel } = req.body;
  setState(channel, true);
  res.send(`${channel} paused`);
});

router.post('/resume', (req, res) => {
  const { channel } = req.body;
  setState(channel, false);
  res.send(`${channel} resumed`);
});

module.exports = router;
