import express from "express";
import mongoose from "mongoose";
import User from "./models/model.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// const mongoose = require("mongoose");
// const User = require("./models/model");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World");
});
app.post("/api/user", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save().then(() => {
    res.send(user);
  });
});

app.put("/api/user/:id", (req, res) => {
  console.log(req.params.id);
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        // name: req.body.name,
        // username: req.body.username,
        grossCoins: req.body.grossCoins,
        netCoins: req.body.netCoins,
      },
    },
    { new: true }
  ).then((updatedUser) => {
    console.log(updatedUser, "updated");
    res.send(updatedUser);
  });
});

// const mongoUri =
//   "mongodb+srv://megadrive037:VenuDevulapally@cluster0.hmnc1se.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      dbName: "denaurlen",
    },
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
  });
  console.log("Server is running on port", { PORT });
});
