const Project = require("../models/Project");

exports.getAllProject = async (req, res, next) => {
    try {
        const [projects, _] = await Project.findAllProjects();

        var title =  'All Projects'
        res.status(200).render("projects/home", { content_title : title,count: projects.length, projects, loggedin: req.session, role: req.session.role, regNo: req.session.regNo });
    } catch (error) {
        console.log(error);
        console.log(next.code);
        
        res.status(404).render('404');
    }
};

exports.getProjectByCategory = async (req, res) => {
    try {
        let projectCategory = req.params.category;
        let [projects, _] = await Project.findByCategory(projectCategory);
        // if( projects[0]  == null)
        //     res.status(404).render('404');
        var title
        switch (projectCategory) {
            case 'mini-project':
                title = 'Mini Projects';
                break;
            case 'major-project':
                title = 'Major Projects';
                break;
            case 'out-house-project':
                title = 'Out House Projects';
                break;
        
            default:
                break;
        }
        res
        .status(200)
        .render("projects/home", { content_title : title, count: projects.length, projects, loggedin: req.session, role: req.session.role, regNo: req.session.regNo })//json({ project: project[0] });
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
        res.status(200).render('projects/project', {project: project[0], loggedin: req.session, role: req.session.role, regNo: req.session.regNo}); //json({ project: project[0] });
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}



