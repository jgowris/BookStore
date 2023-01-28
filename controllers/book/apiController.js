const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.books);
  },
  show(req, res, next) {
    res.json(res.locals.data.book);
  },
};

// We only need Index and Show because we are currently only ever showing a list of fruits
// Or we are showing a single fruit
module.exports = apiController;
