const cloudinary = require("../middleware/cloudinary");
const Driver = require("../models/Driver");
const Start = require("../models/Start")
const Stop = require("../models/Stop")


module.exports = {
  getDashboard: async (req, res) => {
    try {
      const drivers = await Driver.find({ user: req.user.id });
      res.render("dashboard.ejs", { drivers: drivers, user: req.user });



      // const driveTime = await Start.find({})
      // res.render("dashboard.ejs")



    } catch (err) {
      console.log(err);
    }
  },
  getDriver: async (req, res) => {
    try {
      const driver = await Driver.findById(req.params.id);
      res.render("driver.ejs", { driver: driver, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createDriver: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Driver.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        name: req.body.name,
        user: req.user.id,
      });
      console.log("Driver has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteDriver: async (req, res) => {
    try {
      // Find driver by id
      let driver = await Driver.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(driver.cloudinaryId);
      // Delete driver from db
      await Driver.remove({ _id: req.params.id });
      console.log("Deleted Driver");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
  startTime: async (req, res) => {
    try {
      await Start.create({
        time: Date.now(),
        id:req.params._id,
      });
      console.log("Start time has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  stopTime: async (req, res) => {
    try {
      await Stop.create({
        time: Date.now(),
        id:req.params._id,
      });
      console.log("Stop time has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
};
