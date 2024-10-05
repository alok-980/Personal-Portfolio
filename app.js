const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Portfolio = require("./models/portfolio.js");
const Skills = require("./models/skills.js");
const Education = require("./models/education.js");
const Certification = require("./models/certification.js");
const Work = require("./models/work.js");
const Experience = require("./models/experience.js");
const Contact = require("./models/contact.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override');

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Portfolio");
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get("/", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const educationData = await Education.find({});
    const certificationData = await Certification.find({});
    const contactData = await Contact.find({});
    res.render("page/index.ejs", {portfolioData, educationData, certificationData, contactData});
});

app.get("/about", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const skillsData = await Skills.find({});
    const contactData = await Contact.find({});
    res.render("page/about.ejs", {portfolioData, skillsData, contactData});
});

app.get("/skills", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const skillsData = await Skills.find({});
    const contactData = await Contact.find({});
    res.render("page/skills.ejs", {portfolioData, skillsData, contactData});
});

app.get("/skills/new", async (req, res) => {
    const contactData = await Contact.find({});
    res.render("page/new/newSkills.ejs", {contactData});
});

app.post("/skills", async (req, res) => {
    const newSkills = new Skills(req.body.skills);
    await newSkills.save();
    res.redirect("/skills");
});

app.delete("/skills/:id", async (req, res) => {
    let {id} = req.params;
    let deletedSkills = await Skills.findByIdAndDelete(id);
    console.log(deletedSkills);
    res.redirect("/skills");
});

app.get("/education", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const educationData = await Education.find({});
    const certificationData = await Certification.find({});
    const contactData = await Contact.find({});
    res.render("page/education.ejs", {portfolioData, educationData, certificationData, contactData});
});

app.get("/education/new", async (req, res) => {
    const contactData = await Contact.find({});
    res.render("page/new/newEducation.ejs", {contactData});
});

app.get("/education/certification", async (req, res) => {
    const contactData = await Contact.find({});
    res.render("page/new/newCertification.ejs", {contactData});
});

app.post("/education", async (req, res) => {
    const newEducation = new Education(req.body.education);
    await newEducation.save();
    res.redirect("/education");
});

app.delete("/education/:id", async (req, res) => {
    let {id} = req.params;
    let deleteEducation = await Education.findByIdAndDelete(id);
    console.log(deleteEducation);
    res.redirect("/education");
});

app.post("/certification", async (req, res) => {
    const newCertification = new Certification(req.body.certification);
    await newCertification.save();
    res.redirect("/education"); 
});

app.delete("/certification/:id", async (req, res) => {
    let { id } = req.params;
    let deleteCertification = await Certification.findByIdAndDelete(id);
    console.log(deleteCertification);
    res.redirect("/education");
});

app.get("/work", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const workData = await Work.find({});
    const contactData = await Contact.find({});
    res.render("page/work.ejs", {portfolioData, workData, contactData});
});

app.get("/work/new", async (req, res) => {
    const contactData = await Contact.find({});
    res.render("page/new/newWork.ejs", {contactData});
});

app.post("/work", async (req, res) => {
    const newWork = new Work(req.body.work);
    // console.log(newWork);
    await newWork.save();
    res.redirect("/work");
});

app.delete("/work/:id", async (req, res) => {
    let { id } = req.params;
    let deleteWork = await Work.findByIdAndDelete(id);
    console.log(deleteWork);
    res.redirect("/work");
});

app.get("/experience", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const experienceData = await Experience.find({});
    const contactData = await Contact.find({});
    res.render("page/experience.ejs", {portfolioData, experienceData, contactData});
});

app.get("/experience/new", async (req, res) => {
    const contactData = await Contact.find({});
    res.render("page/new/newExperience.ejs", {contactData});
});

app.post("/experience", async (req, res) => {
    const newExperience = new Experience(req.body.experience);
    // console.log(newWork);
    await newExperience.save();
    res.redirect("/experience");
});

app.delete("/experience/:id", async (req, res) => {
    let { id } = req.params;
    let deleteExperience = await Experience.findByIdAndDelete(id);
    console.log(deleteExperience);
    res.redirect("/experience");
});

app.get("/contact", async (req, res) => {
    const portfolioData = await Portfolio.find({});
    const contactData = await Contact.find({});
    res.render("page/contact.ejs", {portfolioData, contactData});
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
