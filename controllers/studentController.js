const Student = require("../models/Student");


exports.getStudentDashboard = async (req, res) => {
    let regNo = req.params.regNo;
    let [result, _] = await Student.findByRegNo(regNo);
    console.log(result[0]);
    try {
        if (result[0] == null) res.status(404).render("404");
        else res.status(200).render("student/dashboard", { result : result[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
    } catch (error) {
        console.log(error);
        res.status(404).render("404");
    }
}

exports.getUpload = async (req, res) => {
    try {
    res.status(200).render("student/create", {loggedin: req.session, role: req.session.role, regNo: req.session.regNo, action: "/student/upload" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
}

exports.postUpload = async (req, res) => {
    
}