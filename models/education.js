const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    icon: {
        type: String,
        set: (v) => v === "" ? "default link" : v,
    },

    qualification: {
        type: String,
        required: true,
    },

    startYear: {
        type: String,
        required: true,
    },

    endYear: {
        type: String,
        required: true,
    },

    institution: {
        type: String,
        required: true,
    },

    grade: String,
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;