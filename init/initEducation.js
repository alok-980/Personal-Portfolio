const mongoose = require("mongoose");

// portfolio home-page data
const initEducation = require("./data/educationData.js");
const Education = require("../models/education.js");

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

// portfolio home page
const initDB = async () => {
    await Education.deleteMany({});
    await Education.insertMany(initEducation.data);
    console.log("data was inisilized");
};

initDB();