const User = require("../modules/user");
exports.getLogin = (req, res) => {
  User.find()
    .then((data) => {
      return res.render("login", {
        allUser: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postUser = (req, res) => {
  let user = new User({
    name: req.body.userName,
    age: req.body.age,
  });
  user.save();
};
exports.getProfile = (req, res) => {
  let _id = req.params.id;
  User.findById(_id)
    .then((data) => {
      return res.render("showUser", {
        user: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postProfile = (req, res) => {
  let _id = req.params.id;

  User.findById(_id)
    .then((data) => {
      data.name = req.body.userName;
      data.age = req.body.age;
      data.save();
      return res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};
