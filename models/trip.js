const mongoose = require("mongoose");
const tripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  Destination: {
    type: String,
    required: false
  },
  Price: {
    type: mongoose.Types.Decimal128,
    required: false
  },
  DepartureDate: {
    type: Date,
    default: Date.now
  },
  ReturnDate: {
    type: Date,
    default: Date.now
  }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
