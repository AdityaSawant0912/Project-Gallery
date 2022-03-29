const express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const Project = require("./models/Project");
const path = require("path");
//const bodyParser = require("body-parser"); No Longer Requierd
require("dotenv").config();
const projectRouts = require("./routes/projectRouts");
const sessionRoutes = require("./routes/sessionRoutes");
const homeRoutes = require("./routes/homeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const uploadRoutes = require("./routes/upload");
const misc = require("./misc");

// Decalring App
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

// For parsing url body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Sessions
app.use(cookieParser());
app.use(
  session({
    secret: "pYn.ZXa?tDIy!pM5*KK$",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use("/", homeRoutes);
app.use("/", sessionRoutes);
app.use("/upload", misc.loginChecker, misc.adminChecker, uploadRoutes);
app.use("/admin/", misc.loginChecker, misc.adminChecker, adminRoutes);
app.use("/projects", misc.loginChecker, projectRouts);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//404
app.use((req, res) => {
  res.status(404).render("404");
});

// Listen on Environment Port or 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
