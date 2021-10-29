const express = require("express");
const mysql = require("mysql");
const pool = require("./config/db");
const Project = require("./models/Project");
//const bodyParser = require("body-parser"); No Longer Requierd
require("dotenv").config();
const projectRouts = require("./routes/projectRouts");
const homeRoutes = require("./routes/HomeRoutes")

// Decalring App
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

// For parsing url body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static Files
app.use(express.static('public'))
// Routes
app.use("/", homeRoutes)
app.use("/projects", projectRouts)

// Listen on Environment Port or 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
