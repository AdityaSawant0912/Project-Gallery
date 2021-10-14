const express = require("express");
const mysql = require("mysql");
//const bodyParser = require("body-parser"); No Longer Requierd
require("dotenv").config();

// Decalring App
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

// For parsing url body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "demogallery",
});

// Get all Projects
app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);

    connection.query("SELECT * from cs",(err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// Get Project by id
app.get("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);

    connection.query("SELECT * from cs WHERE id = ? ",[req.params.id],(err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// Delete a project
app.delete("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);

    connection.query("DELETE from cs WHERE id = ? ",[req.params.id],(err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.send(`Project with ID ${req.params.id} has be successfully deleted.`);
      } else {
        console.log(err);
      }
    });
  });
});

// Add a project
app.post("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);

    const params = req.body;
    
    connection.query("INSERT INTO cs SET ? ",params,(err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.send(`Project with Name ${params.project_name} has be successfully added.`);
      } else {
        console.log(err);
      }
    });
  });
});

// Update a project
app.put("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);

    const { id, project_name, project_description, project_likes } = req.body;
    
    connection.query("UPDATE cs SET project_name = ?, project_description = ?, project_likes = ? WHERE id = ? ",[project_name, project_description, project_likes, id],(err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.send(`Project with Name ${project_name} has be successfully updated.`);
      } else {
        console.log(err);
      }
    });
  });
});

// Listen on Environment Port or 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
