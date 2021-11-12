const Project = require('../models/Project');

exports.getHome = async(req, res) => {
    try {
        res.status(200).render('home');
    } catch (error) {
        console.log(error);
        res.status(404).render('404');
    }
}