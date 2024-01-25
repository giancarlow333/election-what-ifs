const { Schema, model } = require('mongoose');

const electionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Election = model('Election', electionSchema);

module.exports = Election;
