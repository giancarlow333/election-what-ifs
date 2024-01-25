const db = require('../config/connection');
const { Election } = require('../models');
const electionSeeds = require('./electionSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Election', 'elections');
    
    await Election.create(electionSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
