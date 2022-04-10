const User = require("../models/User");
const Student = require("../models/Student");
const misc = require('../misc');
exports.doLoggout = async (req, res) => {
    req.session.destroy((err) => res.redirect("/"));
};
exports.getRegister = async (req, res) => {
  res.status(200).render("registerStudent", {loggedin: req.session, role: req.session.role, regNo: req.session.regNo, action: "/student/upload" });
};
exports.getLogin = async (req, res) => {
  res.status(200).render("login", {loggedin: req.session, role: req.session.role, regNo: req.session.regNo, action: "/student/upload" });
};

exports.doRegisterStudent = async (req, res) => {
  const { email, password, regNo, name, branch,  githubLink, linkedinLink} = req.body;
  console.log(req.body);
  const role = "student";
  const user = new User(email, password, role);
  const student = new Student(regNo, email, name, branch,  githubLink, linkedinLink);
  try {
    let result = await user.save();
    let result2 = await student.save();
    if (result[0].affectedRows == 1  && result2[0].affectedRows == 1) {
      req.session.authorised = true;
      req.session.role = "student";
      req.session.email = email;
      req.session.regNo = regNo
      // res.cookie("email", email);
      res.status(200).redirect("/projects/all");
    } else res.status(404).render("404", {content: "Student Already Exists OR Server Issue", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  } catch (error) {
    console.log(error);
    res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  }
};

exports.doRegisterAdmin = async (req, res) => {
  const { email, password} = req.body;
  console.log(req.body);
  const role = "admin";
  const user = new User(email, password, role);
  try {
    let result = await user.save();
    if (result[0].affectedRows == 1) {
      req.session.destroy((err) => console.log(error));
      req.session.authorised = true;
      req.session.role = "admin";
      req.session.email = email;
      // res.cookie("email", email);
      res.status(200).redirect("/");
    } else res.status(404).render("404", {content: "Student Already Exists OR Server Issue", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  } catch (error) {
    console.log(error);
    res.status(404).render("404", {content: "Student Already Exists OR Server Issue", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  }
};

exports.doLogin = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    let result = await User.findOne(email, password, role );
    if (result[0].length == 1) {
      req.session.authorised = true;
      req.session.role = role;
      req.session.email = email;
    if(role == "student"){
      let [regNo, _] = await Student.getRegNo(email);
      req.session.regNo = regNo[0].regNo
    }
      // res.cookie("email", email);
    } else res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
    if (role == "admin") {res.status(200).redirect("/admin");}
    else res.status(200).redirect("/projects/all");
  } catch (error) {
    res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  }
};





