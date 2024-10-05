const mongoose = require("mongoose");

const initCertification = require("./data/certificationData.js");
const Certification = require("../models/certification.js");

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

const initDB = async () => {
    await Certification.deleteMany({});
    await Certification.insertMany(initCertification.data);
    console.log("data was inisilized");
};

initDB();