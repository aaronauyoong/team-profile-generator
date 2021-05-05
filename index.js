// Packages used in this application.
const inquirer = require('inquirer');
const fs = require('fs');

// Generating team profile
const generateTeamHTML = require('./src/generateTeamHTML');

// Manager, Engineer, Intern extends from Employee Parent Class.
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');;
const Intern = require('./lib/Intern');

// Empty array for team member profiles
const teamProfileArr = [];

// Initial question to ask user to select employee type.
const employeeType = [
    {
        type: "list",
        message: 'Please select your employee type.',
        name: 'employeeType',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

// List questions to ask manager
const managerProfile = () => {
    
    console.log("Please enter the manager details by answering the following questions.");

    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
    ])
}

// List questions to ask engineer and intern
const employeeProfiles = () => {

    console.log("Please enter the employee details by answering the following questions.");

    return inquirer.prompt ([
        {
            type: "list",
            name: "employeeType",
            message: "Please select the employee type to be added to this team.",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
            // Add validation for email input (allowed characters)
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub profile URL. Note - please enter the complete URL, e.g. http://github.com/aaronauyoong",
            when: (input) => input.employeeType === "Engineer",
            // Add validation for github profile input
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of the school the intern currently attends.",
            when: (input) => input.employeeType === "Intern",
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add another employee to your team profile?",
            choices: ["Yes", "No"],
        },
    ])
}

// Generate team profile. 
const createProfile = data => {
    fs.createProfile('./dist/teamprofile.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile was successfully created as 'teamprofile.html'. You may locate the file in the dist directory.")
        }
    })
}; 

managerProfile()
  .then(employeeProfiles)
  .then(teamProfileArr => {
    return generateTeamHTML(teamProfileArr);
  })
  .then(profileHTML => {
    return createProfile(profileHTML);
  })
  .catch(err => {
 console.log(err);
  });