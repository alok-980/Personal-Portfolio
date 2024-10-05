const mongoose = require("mongoose");

const initExperience = require("./data/experienceData.js");
const Experience = require("../models/experience.js");

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

const initDB = async () => {
    await Experience.deleteMany({});
    await Experience.insertMany(initExperience.data);
    console.log("data was inisilized");
};

initDB();