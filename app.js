const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

// app.get("/testshop", (req, res) => {
//   res.render("add-product");
// });

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(5000);
