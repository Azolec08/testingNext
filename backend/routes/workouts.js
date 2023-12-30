const express = require("express");
const { getWorkout } = require("../controlers/workoutController");

const router = express.Router();

router.get("/", getWorkout);

module.exports = router;
