const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    song: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    songTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workSchema);
