require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
import { ReportModel } from "../models/ReportModel";
app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;