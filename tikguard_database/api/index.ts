require('dotenv').config();
import { ReportModel } from "../models/ReportModel";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get(
  '/findReport',
  (req, res) => {
    const query = ReportModel.findOne({
      taskId: req.params.taskId,
    });
    query.exec(function (err, report) {
      if (report === null) {
        res.status(401).json('Cannot find account')
      }
      res.json(report);
    });
    // console.log(user);
  }
);

app.post(
  '/addReport',
  async (req, res) => {
    const report = req.body;
    const newReport = new ReportModel({
      id: '1243',
      result: '123123123',
    });
    await newReport.save();
    res.json(newReport);
  }
);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('listening for requests on Port: ' + 3000);
  });
});


module.exports = app;