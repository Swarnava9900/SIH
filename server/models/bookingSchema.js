const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    attractionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Attraction', required: true },
    tickets: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
