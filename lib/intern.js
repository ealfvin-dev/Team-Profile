//Intern class definition

const Employee = require("./employee");

class Intern extends Employee {
    constructor() {
        super();
        this.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;