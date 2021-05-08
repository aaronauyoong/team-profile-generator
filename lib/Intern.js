// Importing Employee  
const { Employee } = require("./Employee");

// Extends from Employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
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