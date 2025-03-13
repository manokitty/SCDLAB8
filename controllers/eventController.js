const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { name, description, date, time, category, reminder } = req.body;
    const event = new Event({ user: req.user._id, name, description, date, time, category, reminder });
    await event.save();
    res.status(201).json({ message: "Event created", event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user._id }).sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
