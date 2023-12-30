const express = require("express");
require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const PORT = process.env.PORT || 3010;

app.use("/api", workoutRoutes);

const uri =
  "mongodb+srv://anime089:anime1234@myanime.pnui0rk.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Connected to  ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err);
  });
