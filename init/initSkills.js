const mongoose = require("mongoose");

// skills
const initSkills = require("./data/skillsData.js");
const Skills = require("../models/skills.js");

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

const initDB = async () => {
    await Skills.deleteMany({});
    await Skills.insertMany(initSkills.data);
    console.log("data was inisilized");
};

initDB();