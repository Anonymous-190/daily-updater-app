require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Daily Updater Backend Running');
});

const scheduleUpdates = require('./scheduler/job');

// Run the scheduleUpdates on server start (optional)
scheduleUpdates();

// Schedule daily updates at 5 AM
cron.schedule('0 5 * * *', () => {
  console.log('Running scheduled daily updates at 5 AM');
  scheduleUpdates().catch(err => {
    console.error('Error running scheduled updates:', err);
  });
}, {
  timezone: 'Asia/Kolkata'  // Change to your timezone
});

// Add the /trigger route for external cron trigger
app.get('/trigger', async (req, res) => {
  try {
    await scheduleUpdates();  // Make sure scheduleUpdates returns a Promise or is async
    res.status(200).send('Daily updates sent successfully!');
  } catch (error) {
    console.error('Error triggering updates:', error);
    res.status(500).send('Failed to send daily updates.');
  }
});

const settingsRoute = require('./routes/settings');
app.use('/api/settings', settingsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
