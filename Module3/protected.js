"use strict";
class Dept {
    // private employees: string[] = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        //
    }
    displayDept() {
        console.log("This is dept of: " + this.name + " with id of " + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAllEmps() {
        console.log(this.employees);
    }
}
class Accounting extends Dept {
    constructor(id) {
        super(id, "Software Engineering");
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const newDepts = new Software("D001");
newDept.displayDept();
