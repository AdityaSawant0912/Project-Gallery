const Project = require('../models/Project');

exports.getAdminHome = async(req, res) =>{
    try {
        const [projects, _] = await Project.findAllProjects();
        res.status(200).json({ count: projects.length, projects });//render("projects/home", { count: projects.length, projects });
    } catch (error) {
         console.log(error);
    }
}