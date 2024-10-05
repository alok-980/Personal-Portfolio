const mongoose = require("mongoose");

const initContact = require("./data/contactData.js");
const Contact = require("../models/contact.js");

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

const initDB = async () => {
    await Contact.deleteMany({});
    await Contact.insertMany(initContact.data);
    console.log("data was inisilized");
};

initDB();