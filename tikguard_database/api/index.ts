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
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('listening for requests on Port: ' + 3000);
  });
});


module.exports = app;