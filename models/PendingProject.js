const db = require("../config/db");

class PendingProject {
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
        project_mentor,
        project_members,
        project_members_name,
        project_year,
        project_submitted_by
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
        this.project_mentor = project_mentor;
        this.project_members = project_members;
        this.project_members_name = project_members_name;
        this.project_year = project_year;
        this.project_submitted_by = project_submitted_by;
        this.project_approved = `not-approved`;
        this.project_remark = `No Remark`;
    }

    save() {
        let date = new Date();
        let yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;
        let sql = `
      INSERT INTO pendingprojects(
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
            project_mentor,
            project_members,
            project_members_name,
            project_year,
            project_created_at,
            project_submitted_by,
            project_approved,
            project_remark
            
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
            '${this.project_mentor}',
            '${this.project_members}',
            '${this.project_members_name}',
            '${this.project_year}',
            '${createdAtDate}',
            '${this.project_submitted_by}',
            '${this.project_approved}',
            '${this.project_remark}'
        )
        `;
        return db.execute(sql);
    }
    
    static async getAllProjects(){
        let sql = `SELECT * FROM pendingprojects`;
        return db.execute(sql);
    }
    
    static async findProjectByRegNo(regNo){
        let sql = `SELECT * FROM pendingprojects WHERE project_submitted_by = '${regNo}'`;
        return db.execute(sql);
    }
    static async findProjectById(id){
        let sql = `SELECT * FROM pendingprojects WHERE id = '${id}'`;
        return db.execute(sql);
    }
    
    static async deleteProjectById(id){
        let sql = `DELETE FROM pendingprojects WHERE id = '${id}'`;
        return db.execute(sql);
    }
}

module.exports = PendingProject;