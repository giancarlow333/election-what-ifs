const { Schema, model } = require('mongoose');

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  party: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  }
});

const Candidate = model('Candidate', candidateSchema);

module.exports = Candidate;
