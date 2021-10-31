const express = require("express");
const mysql = require("mysql");
const pool = require("./config/db");
const Project = require("./models/Project");
const path = require('path')
//const bodyParser = require("body-parser"); No Longer Requierd
require("dotenv").config();
const projectRouts = require("./routes/projectRouts");
const homeRoutes = require("./routes/homeRoutes");
const adminRoutes = require("./routes/adminRoutes");


// Decalring App
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

// For parsing url body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", homeRoutes)
app.use("/admin/", adminRoutes)
app.use("/projects", projectRouts)

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//404
app.use((req, res) =>{
    res.status(404).render('404')
})

// Listen on Environment Port or 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
