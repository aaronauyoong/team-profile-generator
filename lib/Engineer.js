// Importing Employee
const { Employee } = require("./Employee");

// Extends from Employee constructor
class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

};


// Export Engineer file
module.exports = {
    Engineer
}; 