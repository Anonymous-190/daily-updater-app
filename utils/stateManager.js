const fs = require('fs');
const path = './pauseState.json';

function getState() {
  return JSON.parse(fs.readFileSync(path));
}

function setState(channel, value) {
  const state = getState();
  state[channel] = value;
  fs.writeFileSync(path, JSON.stringify(state, null, 2));
}

module.exports = { getState, setState };
