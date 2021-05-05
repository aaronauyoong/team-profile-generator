// Function to generate manager card
const generateManagerCard = (manager) => {
return `
<div class="card col-4 mt-4 h-100">
    <div class="card-header">
        <h2 class="staff-name">${manager.name}</h2>
        <h3 class="employee-type"><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${manager.id}</p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: ${manager.email}</p>
        <p class="office-number list-group-item"><i class="fas fa-phone"></i> Office Number: ${manager.officeNumber}</p>
    </div>
</div>
`;

};

// Function to generate engineer card
const generateEngineerCard = (engineer) => {
return `
<div class="card col-4 mt-4 h-100">
    <div class="card-header">
        <h2 class="staff-name">${engineer.name}</h2>
        <h3 class="employee-type"><i class="fas fa-glasses"></i> Engineer </h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${engineer.id} </p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: ${engineer.email}</p>
        <p class="office-number list-group-item"><i class="fab fa-github"></i> GitHub Profile: ${engineer.github}</p>
    </div>
</div>
`
};

// Function to generate intern card
const generateInternCard = (intern) => {
return `
<div class="card col-4 mt-4 h-100">
    <div class="card-header">
        <h2 class="staff-name">${intern.name}</h2>
        <h3 class="employee-type"><i class="fas fa-glasses"></i> Intern </h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${intern.id} </p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: ${intern.email}</p>
        <p class="office-number list-group-item"><i class="fab fa-github"></i> School: ${intern.github}</p>
    </div>
</div>
`
};

// Function to push employee cards to page

// Template literals for team profile HTML
const generateHTML = (answers) => {


return `
`;
}

// Export module
module.exports = {
    generateTeamHTML
}; 

