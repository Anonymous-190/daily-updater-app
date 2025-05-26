const nodemailer = require('nodemailer');
const { getState } = require('../utils/stateManager');

const sendGmail = () => {
  console.log('sendGmail called');

  if (getState().gmail) {
    console.log('Gmail paused, skipping send');
    return;
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'ayushp2948@gmail.com',
    subject: 'Daily Update',
    text: 'Hello! This is your daily update via Gmail.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('❌ Gmail send error:', error);
    }
    console.log('📧 Gmail sent:', info.response);
  });
};

module.exports = sendGmail;
