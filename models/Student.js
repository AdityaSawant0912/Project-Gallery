const db = require("../config/db");

class Student{
    constructor(regNo, email, name, branch, githubLink, linkedinLink){
        this.regNo = regNo;
        this.email = email;
        this.name = name;
        this.branch = branch;
        this.githubLink = githubLink;
        this.linkedinLink = linkedinLink;
    }
    save(){
        let sql = `INSERT INTO students (regNo, email, name, branch, class, githubLink, linkedinLink, pfpLink) VALUES ('${this.regNo}', '${this.email}', '${this.name}', '${this.branch}', ' ', '${this.githubLink}', '${this.linkedinLink}', ' ')`;
        return db.execute(sql);
    }
    
    static getRegNo(email){
        let sql = `SELECT regNo FROM students WHERE email = '${email}'`;
        return db.execute(sql);
    }
    
    static findByRegNo(regNo){
        let sql = `SELECT * FROM students WHERE regNo = '${regNo}'`;
        return db.execute(sql);
    }
    
    static findByName(name){
        let sql = `SELECT * FROM students WHERE name = '${name}'`;
        return db.execute(sql);
    }
}

module.exports = Student;