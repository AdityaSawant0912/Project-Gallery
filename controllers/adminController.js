const Project = require("../models/Project");
const imgur = require("imgur");
const fs = require("fs");

exports.createNewProject =  async (req, res) => {
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
      project_members,
      project_year,
    } = req.body;
    try {
      let imagePath =
        "../Project-Gallery/public/uploadImages/" + `${project_image}`;
       await imgur.uploadFile(imagePath).then(async (urlObject) => {
        fs.unlinkSync(imagePath);
        imageLink = urlObject.link;

        let newProject = new Project(
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
          project_members,
          project_year
        );
         newProject = await newProject.save();
         
      });
    } catch (err) {
      console.log(err);
    }

    res
      .status(200)
      .redirect("/admin/");
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
}



exports.getAdminHome = async (req, res) => {  
  try {
    const [projects, _] = await Project.findAllProjects();
    res.status(200).render("admin/home", { count: projects.length, projects, loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};

exports.getProjectEdit = async (req, res) => {
  try {
    let projectId = req.params.id;
    let [project, _] = await Project.findById(projectId);
    if (project[0] == null) res.status(404).render("404");
    else res.status(200).render("admin/edit", {project: project[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};

exports.getProjectById = async (req, res) => {
  try {
    let projectId = req.params.id;
    let [project, _] = await Project.findById(projectId);
    if (project[0] == null) res.status(404).render("404");
    else res.status(200).render("projects/project", {project: project, loggedin: req.session, role: req.session.role, regNo: req.session.regNo}); //json({ project: project[0] });
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};

exports.getProjectCreate = async (req, res) => {
  try {
    res.status(200).render("admin/create", { loggedin: req.session, role: req.session.role, regNo: req.session.regNo, action: "/admin" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};



exports.deleteProjectById = async (req, res) => {
  try {
    let projectId = req.params.id;
    try {
      let [project, _] = await Project.deleteById(projectId);
    } catch (error) {
      res.status(404).render("404");
    }
    //res.status(200).send(`Project with Project Id: ${projectId} has been successfully Deleted.`);
    res.status(200).redirect("/admin");
  } catch (error) {
    console.log(error);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const {
      project_name,
      project_category,
      project_year,
      project_description,
      project_image,
      project_abstract,
      project_problem_statement,
      project_methodology,
      project_objective,
      project_results,
      project_references,
      project_achivements,
      project_members,
    } = req.body;
    id = req.params.id;
    let [project, _] = await Project.updateProject(
      id,
      project_name,
      project_description,
      project_category,
      project_abstract,
      project_problem_statement,
      project_methodology,
      project_objective,
      project_results,
      project_references,
      project_achivements,
      project_members,
      project_year
    );
    res.status(200).redirect("/admin"), {loggedin: req.session, role: req.session.role, regNo: req.session.regNo};
  } catch (error) {
    console.log(error);
    res.status(404).render("404");
  }
};
