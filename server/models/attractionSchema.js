const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    availableTickets: { type: Number, required: true }
});

module.exports = mongoose.model('Attraction', attractionSchema);
