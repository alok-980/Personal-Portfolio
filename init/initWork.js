const mongoose = require("mongoose");

const initWork = require("./data/workData.js");
const Work = require("../models/work.js");

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
    await Work.deleteMany({});
    await Work.insertMany(initWork.data);
    console.log("data was inisilized");
};

initDB();