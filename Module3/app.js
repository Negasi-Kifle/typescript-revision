"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        this.employee = [];
        // this.id = id;
        // this.name = name
    }
    displayDept() {
        console.log("This is department of " + this.name + " with id of: " + this.id);
    }
    addEmp(employee) {
        this.employee.push(employee);
    }
    getAllEmps() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const dept = new Department("D001", "Computer Engineering");
dept.displayDept();
const deptCopy = { describe: dept.displayDept() };
deptCopy.describe;
dept.addEmp("Negasi");
dept.addEmp("Kiflom");
// dept.employee[2] = "Kidane"
dept.getAllEmps();
