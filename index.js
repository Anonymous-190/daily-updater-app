require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Daily Updater Backend Running');
});

const scheduleUpdates = require('./scheduler/job');
scheduleUpdates();

const settingsRoute = require('./routes/settings');
app.use('/api/settings', settingsRoute);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
