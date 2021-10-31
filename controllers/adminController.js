const Project = require('../models/Project');

exports.getAdminHome = async(req, res) =>{
    try {
        const [projects, _] = await Project.findAllProjects();
        res.status(200).json({ count: projects.length, projects });//render("projects/home", { count: projects.length, projects });
    } catch (error) {
         console.log(error);
    }
}

exports.getProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        let [project, _] = await Project.findById(projectId);
        if( project[0]  == null)
            res.status(404).render('404');
        res.status(200).render('projects/project', project[0]); //json({ project: project[0] });
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}

exports.createNewProject = async (req, res) => {
  try {
    let { project_name, project_description } = req.body;
    let newProject = new Project(project_name, project_description);
    newProject = await newProject.save();
    console.log(newProject);
    res
      .status(200)
      .send(`Project with Name ${project_name} has been successfully Added.`);
  } catch (error) {
    console.log(error);
    res.status(404).render('404');
  }
};

exports.deleteProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        let [project, _] = await Project.deleteById(projectId);
        res.status(200).send(`Project with Project Id: ${projectId} has been successfully Deleted.`)
    } catch (error) {
        console.log(error);
    }
}

exports.updateProject = async (req, res) => {
    try {
        const { id,project_name, project_description } = req.body;
        let [project, _] = await Project.updateProject(id, project_name, project_description);
        res.status(200).send(`Project with Project Id: ${id} has been successfully Updated.`)
    } catch (error) {
        console.log(error);
    }
}