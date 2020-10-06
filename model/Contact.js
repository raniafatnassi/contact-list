const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema(
    {
        nom: {type: String},
        email: {type: String},
        phone: {type: Number}
    }
);

module.exports = Contact = mongoose.model('Contact', contactSchema);