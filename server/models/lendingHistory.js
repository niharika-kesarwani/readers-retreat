const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lendingHistorySchema = new Schema({
  bookId: String,
  studentRoll: String,
  lentDate: String,
  returnDate: String,
});

module.exports = mongoose.model("LendingHistory", lendingHistorySchema);
