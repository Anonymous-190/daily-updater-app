const sendWhatsApp = require('../channels/whatsapp');
const sendGmail = require('../channels/gmail');
const sendLinkedIn = require('../channels/linkedin');

const scheduleUpdates = () => {
  console.log('🚀 Starting daily update job');
  
  sendGmail();
  
  console.log('➡️ Sending WhatsApp...');
  sendWhatsApp();
  
  sendLinkedIn();
};

module.exports = scheduleUpdates;
