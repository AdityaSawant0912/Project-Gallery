const router = (module.exports = require("express").Router());
const imgur = require("imgur");
const fs = require("fs");
const Project = require("../models/Project");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploadImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  
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
});

