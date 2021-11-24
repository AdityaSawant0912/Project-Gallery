const Project = require('../models/Project');

exports.getAdminHome = async(req, res) =>{
    try {
        const [projects, _] = await Project.findAllProjects();
        res.status(200).render("admin/home", { count: projects.length, projects });
    } catch (error) {
         console.log(error);
         res.status(404).render('404');
    }
}


exports.getProjectEdit = async (req, res) =>{
    try {
        let projectId = req.params.id;
        let [project, _] = await Project.findById(projectId);
        if( project[0]  == null)
            res.status(404).render('404');
        else
            res.status(200).render('admin/edit', project[0]);
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}

exports.getProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        let [project, _] = await Project.findById(projectId);
        if( project[0]  == null)
            res.status(404).render('404');
        else
            res.status(200).render('projects/project', project[0]); //json({ project: project[0] });
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}

exports.getProjectCreate = async (req, res) =>{
    try {
        res
        .status(200)
        .render('admin/create')
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}

exports.createNewProject = async (req, res) => {
  try {
    console.log(req.body);
    let { project_name, project_description, project_category, project_abstract, project_problem_statement, project_methodology, project_objective, project_results, project_references, project_year } = req.body;
    let newProject = new Project(project_name, project_description, project_category, project_abstract, project_problem_statement, project_methodology, project_objective, project_results, project_references, project_year);
    newProject = await newProject.save();
    try {
        const [projects, _] = await Project.findAllProjects()
    } catch (error) {
        res.status(404).render('404');
    }
    res
      .status(200)
      //.send(`Project with Name ${project_name} has been successfully Added.`);
      .redirect('/admin')
  } catch (error) {
    console.log(error);
    res.status(404).render('404');
  }
};

exports.deleteProjectById = async (req, res) => {
    try {
        let projectId = req.params.id;
        try {    
            let [project, _] = await Project.deleteById(projectId);
        } catch (error) {
            res.status(404).render('404');
        }
        //res.status(200).send(`Project with Project Id: ${projectId} has been successfully Deleted.`);
        res.status(200).redirect('/admin');
    } catch (error) {
        console.log(error);
    }
}

exports.updateProject = async (req, res) => {
    try {
        const { id,
    project_name,
    project_description,
    project_category,
    project_abstract,
    project_problem_statement,
    project_methodology,
    project_objective,
    project_results,
    project_references,
    project_year } = req.body;
    console.log(project_description);
        let [project, _] = await Project.updateProject(id,
    project_name,
    project_description,
    project_category,
    project_abstract,
    project_problem_statement,
    project_methodology,
    project_objective,
    project_results,
    project_references,
    project_year);
        res.status(200).redirect('/admin')
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}