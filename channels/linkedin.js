const { getState } = require('../utils/stateManager');

const sendLinkedIn = () => {
  if (getState().linkedin) return;

  console.log('🔗 [Mock] LinkedIn daily update sent');
  // In real-world, use Puppeteer or OAuth API to post status
};

module.exports = sendLinkedIn;
