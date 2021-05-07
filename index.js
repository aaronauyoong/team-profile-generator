// Generating team profile
const { generateManagerCard } = require('./src/generateTeamHTML');
const { generateEngineerCard } = require('./src/generateTeamHTML'); 
const { generateInternCard } = require('./src/generateTeamHTML');
const { createTeamProfileHTML } = require('./src/generateTeamHTML');

// Packages used in this application.
const inquirer = require('inquirer');
const fs = require('fs');

// Manager, Engineer, Intern extends from Employee Parent Class.
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');;
const Intern = require('./lib/Intern');

// Empty array to store all team member profiles
const teamProfileArr = [];

// Initial question to ask user to select employee type.
const getEmployeeRole = () => {

    inquirer.prompt ([
        {
            type: "list",
            message: "Welcome to the Team Profile Generator! Please select the employee type to be added.",
            name: "employeeType",
            choices: ["Manager", "Engineer", "Intern", "Finish"],
        }
    ])
    .then(function(answer) {
        console.log("This is for employeeType", answer.employeeType)
        
        let employeeRole = answer.employeeType;
    
        console.log("this is first test for employeeRole", employeeRole);

        if (employeeRole === "Manager") managerProfile();
        if (employeeRole === "Engineer") engineerProfile();
        if (employeeRole === "Intern") internProfile();
          
    })

    // if (employeeType === "Finish") {
    //     finaliseTeamProfile(generateProfileHTML(answers))
    // };
}

// List questions to ask manager
const managerProfile = () => {
    
    console.log("Please enter the manager's details by answering the following questions.");

    inquirer.prompt ([
        {type: "input", name: "name", message: "What is the team manager's name?" },
        {type: "input", name: "id", message: "What is the team manager's ID?" },
        {type: "input", name: "email", message: "What is the team manager's email?" },
        {type: "input", name: "officeNumber", message: "What is the team manager's office number?"} ,
    ])
    .then(function (answers) {

        console.log(answers);
        teamProfileArr.push(generateManagerCard(answers));
        addNewEmployee();
    })
}

// List questions to ask engineer
const engineerProfile = () => {

    console.log("Please enter the engineer's details by answering the following questions.");

    inquirer.prompt([
            { type: "input", name: "name", message: "What is the engineer's name?" },
            { type: "input", name: "id", message: "What is the engineer's ID?" },
            { type: "input", name: "email", message: "What is the engineer's's email?" },
            { type: "input", name: "github", message: "Please enter the engineer's GitHub profile username." },
    ])
    .then(function (answers) {

        console.log(answers);
        teamProfileArr.push(generateEngineerCard(answers));
        addNewEmployee();
    })
}

// List questions to ask intern
const internProfile = () => {

    console.log("Please enter the intern's details by answering the following questions.");

    inquirer.prompt ([
        { type: "input", name: "name", message: "What is the intern's name?" },
        { type: "input", name: "id", message: "What is the intern's ID?" },
        { type: "input", name: "email", message: "What is the intern's email?" },
        { type: "input", name: "school", message: "Please enter the name of the intern's school" },
    ])
    .then(function (answers) {

        console.log(answers);
        teamProfileArr.push(generateInternCard(answers));
        addNewEmployee();
    })
}

// Option to add another team member
const addNewEmployee = () => {

    inquirer.prompt ([
        {
            type: "list",
            message: "Would you like to add another team member?",
            name: "addEmployee",
            choices: ["Yes", "No"]
        }
    ]).then(function(answer) {

    console.log("This is for addEmployee", answer.addEmployee)
        
    let newEmployee = answer.addEmployee;

    console.log("this is first test for newEmployee", newEmployee);
    
    if (newEmployee === "Yes") getEmployeeRole();
    if (newEmployee === "No") printTeamProfile();

    })
}

// Using stored data in array, generate team profile 
const generateTeamProfile = () => {
    let employeeCards = teamProfileArr;

    console.log(employeeCards);

    createTeamProfileHTML(employeeCards);
    return;
}

// Print team profile. 
const printTeamProfile = () => {

    const teamProfileContent = generateTeamProfile();

    fs.writeFile('./dist/newTeamProfile.html', teamProfileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile was successfully created as 'newTeamProfile.html'. You may locate the file in the dist directory.")
        }
    })
};

// App initialisation
function initApp (){
    console.log("Initialising Team Profile Generator.");
    getEmployeeRole();
};

initApp();