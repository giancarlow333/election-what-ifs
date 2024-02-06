const { Schema, model } = require('mongoose');

const electionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  districts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Districts'
    }
  ],
});

const Election = model('Election', electionSchema);

module.exports = Election;
