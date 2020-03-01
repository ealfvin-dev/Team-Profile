//Engineer class definition

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    makeCard(){
        const html = 
        `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer">${this.github}</a></li>
            </ul>
        </div>
        </div>`
    
    return html;
    }
}

module.exports = Engineer;