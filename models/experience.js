const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },

    startYear: {
        type: String,
        required: true,
    },

    endYear: {
        type: String,
        required: true,
    },

    subtitle: String,

    description: {
        type: String,
        required: true
    },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;