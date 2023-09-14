const express = require("express");
const app = require("express")();
app.use(express.urlencoded({ extended: false }));
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./routes/views");

const userRouter = require("./routes/user");
app.use(userRouter);

app.use((req, res, next) => {
  return res.status(404).send(`<h1>404 page not found !!<h1/>`);
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/newUser", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
