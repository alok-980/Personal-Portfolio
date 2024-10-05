const mongoose = require("mongoose");

// portfolio home-page data
const initData = require("./data/data.js");
const Portfolio = require("../models/portfolio.js");

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
    await Portfolio.deleteMany({});
    await Portfolio.insertMany(initData.data);
    console.log("data was inisilized");
};

initDB();