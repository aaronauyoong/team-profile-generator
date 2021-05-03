// Packages used in this application.
const inquirer = require('inquirer');
const fs = require('fs');

// Manager, Engineer, Intern extends from Employee Parent Class.
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');;
const Intern = require('./lib/Intern');

// Const for webpage design.


// Initial question to ask user to select employee type.
const employeeType = [
    {
        type: "list",
        message: 'Please select your employee type.',
        name: 'employeeType',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

// List questions to ask user. 

// List questions to ask manager
const managerProfile = () => {
    return inquirer.prompt ([
        {},
        {},
    ])
}

// List questions to ask engineer and intern

const engineerProfile;

const internProfile;

// Add employee to file.

// Write file. 

