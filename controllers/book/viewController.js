const RESOURCE_PATH = "/fruits";

const viewController = {
  index(req, res) {
    res.render("fruits/Index", res.locals.data);
  },
  show(req, res) {
    res.render("fruits/Show", res.locals.data);
  },
  edit(req, res) {
    res.render("fruits/Edit", res.locals.data);
  },
  newView(req, res) {
    res.render("fruits/New");
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
