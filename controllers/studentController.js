const Student = require("../models/Student");
const PendingProject = require("../models/PendingProject");
const Project = require("../models/Project");
const imgur = require("imgur");
const fs = require("fs");

exports.getStudentDashboard = async (req, res) => {
    let regNo = req.params.regNo;
    let [student, _] = await Student.findByRegNo(regNo);
    let [pendingProjects, ] = await PendingProject.getAllProjects();
    let [ProjectsIds, ] = [...new Set(await Project.findProjectByRegNo(regNo))];
    let Projects=  await Project.findProjectByIds(ProjectsIds);
    console.log(pendingProjects);
    try {
        if (student[0] == null) res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
        else res.status(200).render("student/dashboard", { student : student[0],pendingProjects, Projects,loggedin: req.session, role: req.session.role, regNo: req.session.regNo, pendingProjects});
    } catch (error) {
        console.log(error);
        res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
    }
}

exports.getUpload = async (req, res) => {
    try {
    res.status(200).render("student/create", {loggedin: req.session, role: req.session.role, regNo: req.session.regNo, action: "/student/upload" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
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
      console.log(err);
      res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
    }

    res
      .status(200)
      .redirect(`/student/dashboard/${req.session.regNo}`);
  } catch (error) {
    console.log(error);
    res.status(404).render("404", {content: "default", loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  }
}