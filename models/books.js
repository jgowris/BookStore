const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  //   readyToEat: { type: Boolean, default: false },
  bookIsAvailable: { type: Boolean, default: false },
  username: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
