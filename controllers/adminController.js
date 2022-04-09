const Project = require("../models/Project");
const PendingProject = require("../models/PendingProject");
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
          project_mentor,
          project_members,
          project_members_name,
          project_year
        );
         newProject_id = await newProject.save();
         
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
exports.getAllPendingProject = async (req, res, next) => {
    try {
        const [projects, _] = await PendingProject.getAllProjects();

        var title =  'All Pending Projects'
        res.status(200).render("admin/pending", { content_title : title,count: projects.length, projects, loggedin: req.session, role: req.session.role, regNo: req.session.regNo });
    } catch (error) {
        console.log(error);
        console.log(next.code);
        
        res.status(404).render('404');
    }
};

exports.getPendingProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        let [project, _] = await PendingProject.findProjectById(projectId);
        if( project[0]  == null)
            res.status(404).render('404');
        res.status(200).render('projects/project', {project: project[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo}); //json({ project: project[0] });
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}
exports.approveProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        let [project, _] = await PendingProject.findProjectById(projectId);
        if( project[0]  == null)
            res.status(404).render('404');
        project = project[0]    
        let newProject = new Project(
          project.project_name,
          project.project_description,
          project.project_image,
          project.project_category,
          project.project_abstract,
          project.project_problem_statement,
          project.project_methodology,
          project.project_objective,
          project.project_results,
          project.project_references,
          project.project_achivements,
          project.project_mentor,
          project.project_members,
          project.project_members_name,
          project.project_year
        );
        
        newProject = await newProject.save();
        console.log("done");
        let del = await PendingProject.deleteProjectById(projectId);
        console.log("del");
        res.redirect("/admin/pending");
        // res.status(200).render('projects/project', {project: project[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo}); //json({ project: project[0] });
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
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
      res.status(200).redirect("/admin");
    } catch (error) {
      console.log(error);
      res.status(404).render("404");
    }
    //res.status(200).send(`Project with Project Id: ${projectId} has been successfully Deleted.`);
    
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
