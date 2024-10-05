const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    image: {
        type: String,
        set: (v) => v === "" ? "default link" : v,
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
});

const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;