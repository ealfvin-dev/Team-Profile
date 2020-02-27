//Manager class definition

const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super();
        this.officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;