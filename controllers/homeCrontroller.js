const Project = require('../models/Project');

exports.getHome = async(req, res) => {
    try {
        res.status(200).render('home', {
      "id": 1,
      "project_name": "Project Gallery 1",
      "project_description": "Project Gallery 1",
      "project_likes": 100,
      "project_created_at": "2021-10-21"
    });
    } catch (error) {
        console.log(error);
    }
}