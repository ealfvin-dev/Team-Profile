//Manager class definition

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    makeCard(){
        const html = 
        `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office number: ${this.officeNumber}</li>
            </ul>
        </div>
        </div>`
    
    return html;
    }
}

module.exports = Manager;