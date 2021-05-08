// Function to generate manager card
const generateManagerCard = (answers) => {
return `
<div class="card col-lg-4 mt-4 d-flex align-items-stretch">
    <div class="card-header">
        <h2 class="staff-name">${answers.name}</h2>
        <h3 class="employee-type"><i class="fas fa-mug-hot"></i> Manager</h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${answers.id}</p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
        <p class="office-number list-group-item"><i class="fas fa-phone"></i> Office Number: ${answers.officeNumber}</p>
    </div>
</div>
`;

};

// Function to generate engineer card
const generateEngineerCard = (answers) => {
return `
<div class="card col-lg-4 mt-4 d-flex align-items-stretch">
    <div class="card-header">
        <h2 class="staff-name">${answers.name}</h2>
        <h3 class="employee-type"><i class="fas fa-glasses"></i> Engineer </h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${answers.id} </p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
        <p class="github-profile list-group-item"><i class="fab fa-github"></i> GitHub Profile: <a href="http://github.com/${answers.github}">${answers.github}</a></p>
    </div>
</div>
`
};

// Function to generate intern card
const generateInternCard = (answers) => {
return `
<div class="card col-lg-4 mt-4 d-flex align-items-stretch">
    <div class="card-header">
        <h2 class="staff-name">${answers.name}</h2>
        <h3 class="employee-type"><i class="fas fa-glasses"></i> Intern </h3>
    </div>
    <div class="card-body">
        <p class="id list-group-item"><i class="fas fa-id-badge"></i> ID: ${answers.id} </p>
        <p class="email list-group-item"><i class="fas fa-envelope-square"></i> Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
        <p class="school-name list-group-item"><i class="fas fa-university"></i> School: ${answers.school}</p>
    </div>
</div>
`
};

// Template literals for team profile HTML
const createTeamProfileHTML = (employeeCards) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" 
    crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css">
    <title>My Team Profile</title>
</head>
<body>
    <div class="container-fluid profile-header">
        <header id="teamprofile">
            <h1 class="navbar py-3 py-lg-5 display-4 justify-content-center">Sample Team Profile</h1>
        </header>
    </div>

    <div class="container">
        <div class="row">
            <!-- Employee Cards -->
            ${employeeCards}
        </div>
    </div>
    
</body>
</html>
`
}

// Export module
module.exports = {

    generateManagerCard,
    generateEngineerCard,
    generateInternCard,
    createTeamProfileHTML,

};

