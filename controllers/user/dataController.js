const User = require("../../models/user");
const Book = require("../../models/books");

const dataController = {
  index(req, res, next) {
    User.find({ username: req.session.username }, (error, allBooks) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.books = allBooks;
        next();
      }
    });
  },
};

module.exports = dataController;
