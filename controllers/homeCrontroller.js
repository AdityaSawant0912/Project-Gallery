const Project = require('../models/Project');

exports.getHome = async(req, res) => {
    try {
        console.log(req.session.role);
        res.status(200).render('home', {loggedin: req.session, role: req.session.role, regNo: req.session.regNo});
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}


