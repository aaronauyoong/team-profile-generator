// Importing Employee  
const { Employee } = require("./Employee");

// Extends from Employee constructor
class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

};

// Export Intern file
module.exports = {
    Intern
}; 