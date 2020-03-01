const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");

const inquirer = require("inquirer");

//Prompt for manager name
function buildTeam() {
    inquirer.prompt([{
        message: "Manager Name: ",
        name: "name"
    },
    {
        message: "Manager ID: ",
        name: "id"
    },
    {
        message: "Manager email: ",
        name: "email"
    },
    {
        message: "Manager Office Number: ",
        name: "officeNum"
    }])
    .then(function(input) {
        const manager = new Manager(input.name, input.id, input.email, input.officeNum);

        writeCard(manager);

        getOtherMembers();
    });
}

//Write manager into html
function writeCard(member) {
    fs.appendFile("./output/team.html", "\n" + member.makeCard() + "\n", function(err) {
        if(err) {
            throw err;
        }
    });
}

//Prompt for more team members
function getOtherMembers() {
    inquirer.prompt([{
        type: "list",
        message: "Enter and new team member: ",
        choices: ["Engineer", "Intern", "Exit"],
        name: "employeeType"
    }
    ]).then(function(response) {
        if(response.employeeType === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Employee Name: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Employee ID: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Employee email: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Employee GitHub: ",
                    name: "github"
                }
            ]).then(function(engResponse) {
                const engineer = new Engineer(engResponse.name, engResponse.id, engResponse.email, engResponse.github);
                writeCard(engineer);
                getOtherMembers();
            })
        }
        if(response.employeeType === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Employee Name: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Employee ID: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Employee email: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Employee School: ",
                    name: "school"
                }
            ]).then(function(intResponse) {
                const intern = new Intern(intResponse.name, intResponse.id, intResponse.email, intResponse.school);
                writeCard(intern);
                getOtherMembers();
            })
        }
        if(response.employeeType === "Exit") {
            writeFooter();
        }
    });
}

function writeHeader(){
    const headerhtml = 
    `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">`

    fs.writeFile("./output/team.html", headerhtml, function(err) {
        if(err) {
            throw err;
        }
    });
}

function writeFooter() {
    const footerhtml = 
    `
                </div>
            </div>
        </div>
    </body>

    </html>`

    fs.appendFile("./output/team.html", footerhtml, function(err) {
        if(err) {
            throw err;
        }
    });
}

//Entry point:
writeHeader();
buildTeam();