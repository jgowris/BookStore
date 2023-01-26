require("dotenv").config();

/**
 * Requirements
 */
const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = 3000;

/**
 * Controllers
 */
const homeController = require("./controllers/home/homeController");
const bookController = require("./controllers/book/bookController");
const userController = require("./controllers/user/userController");

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */
const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);

/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Controllers
 */
app.use("/home", homeController);
app.use("/book", bookController);
app.use("/user", userController);

// Redirect to /home if the user goes to our base route
app.get("/", (req, res) => {
  res.redirect("/home/");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
