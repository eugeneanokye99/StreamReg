const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    workshopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

module.exports = mongoose.model("Registration", RegistrationSchema);
