const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  result:{
    type: String,
    require: true,
  },
});

const ReportModel = mongoose.model('reports', ReportSchema);

module.exports = {ReportModel};
