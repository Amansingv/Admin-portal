const api = require("./models/api");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const connection_string = process.env.CONNECTION_STRING;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());

app.use("/", api);
// app.use("/", api);

// app.get("/", (req, res) => {
//   res.render("admins", { name: " Raman" });
// });

app.listen(port, () => {
  console.log("server running on port 3000");
});

mongoose
  .connect(connection_string, { useNewUrlParser: true })
  .then(() => console.log("Application connected"))
  .catch((error) => console.log("mongodb connection failed", error.message));
