const Workout = require("../model/workoutModels");

const getWorkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

module.exports = {
  getWorkout,
};
