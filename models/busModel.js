const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: [true, 'Please Enter Bus Name'],
    unique: [false, 'This Bus Name Already Exists'],
    maxlength: [30, 'Name cannot exceed 30 characters'],
    minlength: [4, 'Name should have more than 4 characters'],
  },
  busLicense: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'busOwner',
  },
  engineNumber: {
    type: String,
    unique: [true, 'This Engine Number Already Exists'],
    required: true,
  },
  seatModule: {
    type: String,
    required: true,
  },
  routePermit: {
    type: String,
    required: true,
  },
  routeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'BusRoute',
  },

  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Bus', busSchema);
