const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollNumber: String,
  name: String,
  email: String,
  phoneNo: String,
});

module.exports = mongoose.model("Students", studentSchema);
