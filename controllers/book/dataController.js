const Book = require("../../models/books");

const dataController = {
  index(req, res, next) {
    Book.find({ username: req.session.username }, (error, allBooks) => {
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
  create(req, res, next) {
    req.body.bookIsAvailable = req.body.bookIsAvailable === "on" ? true : false;

    req.body.username = req.session.username;
    // Use Model to create Fruit Document
    Book.create(req.body, (error, createdBook) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.book = createdBook;
        next();
      }
    });
  },
  show(req, res, next) {
    Book.findById(req.params.id, (error, foundBook) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.book = foundBook;
        next();
      }
    });
  },
  update(req, res, next) {
    req.body.bookIsAvailable = req.body.bookIsAvailable === "on" ? true : false;
    Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedBook) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.book = updatedBook;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    Book.findByIdAndRemove(req.params.id, (error, book) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.book = book;
        next();
      }
    });
  },
};

module.exports = dataController;
