//Engineer class definition

const Employee = require("./employee");

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