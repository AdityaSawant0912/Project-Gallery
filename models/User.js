const db = require("../config/db");

class User{
    constructor(email, password, role){
        this.email = email;
        this.password = password;
        this.role = role
    }
    
    save(){
        let sql = `INSERT INTO users (email, password, role) VALUES ('${this.email}', MD5('${this.password}'), '${this.role}')`;
        return db.execute(sql);
    }
    
    static findOne(email, password, role){
        let sql = `SELECT * FROM users WHERE email = '${email}' AND password = MD5('${password}') AND role = '${role}'`;

        return db.execute(sql);
    }
    
    static getRole(email){
        let sql = `SELECT role FROM users WHERE email = '${email}'`;
        return db.execute(sql);
    }
}

module.exports = User
