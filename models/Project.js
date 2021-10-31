const db = require("../config/db");

class Project {
  constructor(project_name, project_description) {
    this.project_name = project_name;
    this.project_description = project_description;
    this.project_likes = 0;
  }

  save() {
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
      INSERT INTO cs(
            project_name,
            project_description,
            project_likes,
            project_created_at
        )
        VALUES(
            '${this.project_name}',
            '${this.project_description}',
            '${this.project_likes}',
            '${createdAtDate}'
        )
        `;
    return db.execute(sql);
  }
  
  static findAllProjects(){
    let sql = "SELECT * from cs";
    return db.execute(sql);
  }
  
  static findById(id) {
    let sql = `SELECT * from cs WHERE id = ${id} `;     
    return db.execute(sql);
  }
  
  static findByCategory(category) {
    let sql = `SELECT * from cs WHERE project_category = '${category}' `;     
    return db.execute(sql);
  }
  
  static deleteById(id) {
    let sql = `DELETE from cs WHERE id = ${id}`
    return db.execute(sql);
  }
  
  static updateProject(id, project_name, project_description){
    let sql = `UPDATE cs SET project_name = '${project_name}', project_description = '${project_description}' WHERE id = ${id} `;
    return db.execute(sql);
  }
  
}

module.exports = Project;
