const User = require("../models/User");
const misc = require('../misc');
exports.doLoggout = async (req, res) => {
    res.clearCookie('email')
    req.session.destroy((err) => res.redirect("/"));
};
exports.getRegister = async (req, res) => {
  res.status(200).render("register");
};
exports.getLogin = async (req, res) => {
  res.status(200).render("login");
};

exports.doRegister = async (req, res) => {
  const { email, password, role } = req.body;
  const user = new User(email, password, role);
  try {
    let result = await user.save();
    if (result[0].affectedRows == 1) {
      req.session.authorised = true;
      res.cookie("email", email);
    } else res.status(404).render("404");
    res.status(200).redirect("/");
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};

exports.doLogin = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let result = await User.findOne(email, password, role );
    if (result[0].length == 1) {
      req.session.authorised = true;
      res.cookie("email", email);
    } else res.status(404).render("404");
    if (role == "admin") {res.status(200).redirect("/admin");}
    else res.status(200).redirect("/projects/all");
  } catch (error) {
    res.status(404).render("404");
  }
};


