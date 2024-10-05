const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    phone: String,
    email: String,
    address: String,
    linkedin: String,
    github: String,
    twitter: String,
    telegram: String,
    instagram: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;