const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const driversController = require("../controllers/drivers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, driversController.getDriver);

router.post("/createDriver", upload.single("file"), driversController.createDriver);

router.delete("/deleteDriver/:id", driversController.deleteDriver);

router.post("/start/:_id", driversController.startTime);
router.post("/stop/:_id", driversController.stopTime);



module.exports = router;
