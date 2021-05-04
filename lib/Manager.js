// Importing Employee 
const { Employee } = require("./Employee");

// Extends from Employee constructor
class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

};

// Export Manager file 
module.exports = {
    Manager
}; 