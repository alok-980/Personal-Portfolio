const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    icon: {
        type: String,
        set: (v) => v === "" ? "default link" : v,
    },

    title: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    issuer: {
        type: String,
        required: true,
    }
});

const Certification = mongoose.model('Certification', certificationSchema);

module.exports = Certification;