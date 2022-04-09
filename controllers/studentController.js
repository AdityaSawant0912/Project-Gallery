const Student = require("../models/Student");
const PendingProject = require("../models/PendingProject");
const imgur = require("imgur");
const fs = require("fs");

exports.getStudentDashboard = async (req, res) => {
    let regNo = req.params.regNo;
    let [result, _] = await Student.findByRegNo(regNo);
    let [pendingProjects, ] = await PendingProject.findProjectByRegNo(regNo);
    try {
        if (result[0] == null) res.status(404).render("404");
        else res.status(200).render("student/dashboard", { result : result[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo, pendingProjects});
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
    try {
    let imageLink;
    let {
      project_name,
      project_description,
      project_image,
      project_category,
      project_abstract,
      project_problem_statement,
      project_methodology,
      project_objective,
      project_results,
      project_references,
      project_achivements,
      project_mentor,
      project_members,
      project_members_name,
      project_year,
    } = req.body;
    console.log(req.body);
    try {
      let imagePath =
        "../Project-Gallery/public/uploadImages/" + `${project_image}`;
       await imgur.uploadFile(imagePath).then(async (urlObject) => {
        fs.unlinkSync(imagePath);
        imageLink = urlObject.link;

        let newProject = new PendingProject(
          project_name,
          project_description,
          imageLink,
          project_category,
          project_abstract,
          project_problem_statement,
          project_methodology,
          project_objective,
          project_results,
          project_references,
          project_achivements,
          project_mentor,
          project_members,
          project_members_name,
          project_year,
          req.session.regNo
        );
         newProject_id = await newProject.save();
         
      });
    } catch (err) {
      console.log("h111111");
      console.log(err);
    }

    res
      .status(200)
      .redirect(`/student/dashboard/${req.session.regNo}`);
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
}