const { Schema, model } = require('mongoose');

const districtSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  candidates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Candidates'
    }
  ],
});

const District = model('District', districtSchema);

module.exports = District;
