const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
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

const Work = mongoose.model('Work', workSchema);

module.exports = Work;