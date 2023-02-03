const mongoose = require("mongoose");
const Book = require("./books");
const User = require("./user");
const db = require("../db");

const seedBooks = [
  {
    name: "Eye of the Needle",
    author: "Ken Follet",
    image: "https://i.imgur.com/VyWuaUz.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Coma",
    author: "Robin Cook",
    image: "https://i.imgur.com/uzPZ2OC.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Hunt for Red October",
    author: "Tom Clancy",
    image: "https://i.imgur.com/xmE137Z.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Scary Smart",
    author: "Mo Gawdat",
    image: "https://i.imgur.com/ERkPCwU.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Seven and a Half Lessons",
    author: "Lisa Feldman Barett",
    image: "https://i.imgur.com/uijaI1i.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Monk who sold his Ferrari",
    author: "Robin Sharma",
    image: "https://i.imgur.com/hKLFZAm.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "That Little Voice in your Head",
    author: "Mo Gawdat",
    image: "https://i.imgur.com/3tcUuR1.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "This is going to hurt",
    author: "Adam Kay",
    image: "https://i.imgur.com/6p8o6kU.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
  {
    name: "Finding Hildasay",
    author: "Christian Lewis",
    image: "https://i.imgur.com/7KxBOJS.jpg",
    bookIsAvailable: true,
    username: "admin",
    adminAcess: true,
  },
];

const seedUser = [
  {
    username: "admin",
    password: "adminpassword",
    admin: true,
  },
];

const seedDB = async () => {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
  console.log('books inserted')
};

seedDB().then(() => {
  // mongoose.connection.close();
  const seedDBUser = async () => {
    await User.deleteMany({});
    await User.create(seedUser);
    console.log('user created')
  };

  seedDBUser().then(() => {
    mongoose.connection.close();
  });
});

// module.exports = mongoose.connection;
