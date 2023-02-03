const mongoose = require("mongoose");
const Book = require("./books");
const db = require("../db");


const seedBooks = [
  {
    name: "Eye of the Needle",
    author: "Ken Follet",
    image: "https://i.imgur.com/VyWuaUz.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Coma",
    author: "Robin Cook",
    image: "https://i.imgur.com/uzPZ2OC.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Hunt for Red October",
    author: "Tom Clancy",
    image: "https://i.imgur.com/xmE137Z.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Scary Smart",
    author: "Mo Gawdat",
    image: "https://i.imgur.com/ERkPCwU.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Seven and a Half Lessons",
    author: "Lisa Feldman Barett",
    image: "https://i.imgur.com/uijaI1i.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Monk who sold his Ferrari",
    author: "Robin Sharma",
    image: "https://i.imgur.com/hKLFZAm.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "That Little Voice in your Head",
    author: "Mo Gawdat",
    image: "https://i.imgur.com/3tcUuR1.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "This is going to hurt",
    author: "Adam Kay",
    image: "https://i.imgur.com/6p8o6kU.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
  {
    name: "Finding Hildasay",
    author: "Christian Lewis",
    image: "https://i.imgur.com/7KxBOJS.jpg",
    bookIsAvailable: true,
    username: "demo_user",
  },
];

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
};

seedDB().then(() => {
  mongoose.connection.close();
});

// module.exports = mongoose.connection;
