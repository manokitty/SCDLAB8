const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  category: { type: String, enum: ["Meeting", "Birthday", "Appointment"], required: true },
});

module.exports = mongoose.model("Event", eventSchema);
