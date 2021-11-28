const db = require("../config/db");

class Project {
  constructor(
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
    project_year
  ) {
    this.project_name = project_name;
    this.project_description = project_description;
    this.project_image = project_image;
    this.project_category = project_category;
    this.project_abstract = project_abstract;
    this.project_problem_statement = project_problem_statement;
    this.project_methodology = project_methodology;
    this.project_objective = project_objective;
    this.project_results = project_results;
    this.project_references = project_references;
    this.project_achivements = project_achivements;
    this.project_members = project_members;
    this.project_year = project_year;
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
            project_created_at
            
        )
        VALUES(
            '${this.project_name}',
            '${this.project_description}',
            '${this.project_image}',
            '${this.project_category}',
            '${this.project_abstract}',
            '${this.project_problem_statement}',
            '${this.project_methodology}',
            '${this.project_objective}',
            '${this.project_results}',
            '${this.project_references}',
            '${this.project_achivements}',
            '${this.project_members}',
            '${this.project_year}',
            '${createdAtDate}'
        )
        `;
    return db.execute(sql);
  }

  static findAllProjects() {
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
    let sql = `DELETE from cs WHERE id = ${id}`;
    return db.execute(sql);
  }
  
  static updateImage(id, project_image){
    let sql = `UPDATE cs SET project_image = '${project_image}' WHERE id = ${id}`;
    return db.execute(sql);
  }

  static updateProject(
    id,
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
    project_year
  ) {
    let sql = `UPDATE cs SET
            project_name = '${project_name}',  
            project_category = '${project_category}',
            project_description = '${project_description}',
            project_image = '${project_image}',
            project_abstract = '${project_abstract}',
            project_problem_statement = '${project_problem_statement}',
            project_methodology = '${project_methodology}',
            project_objective = '${project_objective}',
            project_results = '${project_results}',
            project_references = '${project_references}',
            project_achivements = '${project_achivements}',
            project_members = '${project_members}',
            project_year = ${project_year}
            WHERE id = ${id}`;
    return db.execute(sql);
  }
}

module.exports = Project;
