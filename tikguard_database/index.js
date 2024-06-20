require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3011;
const { ReportModel } = require('./models/ReportModel');


app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});
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
    const newReport = new ReportModel(report);
    await newReport.save();
    res.json(newReport);
  }
);

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('listening for requests on Port: ' + PORT);
  });
});
