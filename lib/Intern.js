// Importing Employee  
const { Employee } = require("./Employee");

// Extends from Employee constructor
class Intern extends Employee {
    constructor(schoolName, name, id, email) {
        super(name, id, email)
        this.schoolName = schoolName;
    }

    getOfficeNumber() {
        return this.schoolName;
    }

    getRole() {
        return "Intern";
    }
    
};

// Export Intern file
module.exports = {
    Intern
}; 