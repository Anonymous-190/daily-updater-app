const twilio = require('twilio');
const { getState } = require('../utils/stateManager');

const sendWhatsApp = () => {
  if (getState().whatsapp) {
    console.log('WhatsApp is paused. Skipping...');
    return;
  }

  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

  client.messages
    .create({
      body: '🌟 Hello! This is your daily update via WhatsApp.',
      from: 'whatsapp:+14155238886', // Twilio Sandbox number
      to: process.env.MY_WHATSAPP,
    })
    .then(message => console.log('💬 WhatsApp sent, SID:', message.sid))
    .catch(err => console.error('❌ WhatsApp send error:', err));
};

module.exports = sendWhatsApp;
