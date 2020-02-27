//Engineer class definition

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super();
        this.gitHub;
    }

    getGitHub() {
        return this.getGitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;