const RESOURCE_PATH = "/user";

const viewController = {
  index(req, res) {
    res.render("user/Index", res.locals.data);
  },
  //   show(req, res) {
  //     res.render("books/Show", res.locals.data);
  //   },
  //   edit(req, res) {
  //     res.render("books/Edit", res.locals.data);
  //   },
  //   newView(req, res) {
  //     res.render("books/New");
  //   },
  //   redirectHome(req, res) {
  //     res.redirect(RESOURCE_PATH);
  //   },
  //   redirectShow(req, res) {
  //     res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  //   },
};

module.exports = viewController;
