"use strict";
class Deptmnt2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        //
    }
    static createStream(streamName) {
        return { streamName };
    }
    displayDept() {
        console.log("This is department of: ", this.name + " with an id of " + this.id);
    }
    addEmp(emp) {
        this.employees.push(emp);
    }
    displayEmps() {
        console.log(this.employees);
    }
}
// IT department
class IT2 extends Deptmnt2 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    // Use the abstract method
    describe() {
        console.log("ID of department of " + this.name + " is " + this.id);
    }
    // Getter to get most recent report
    get mostRecentReport() {
        if (this.reports.length > 0) {
            return this.reports[0];
        }
        else {
            throw new Error("No reports at all");
        }
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please provide a valid value");
        this.addReport(value);
    }
    addReport(newReport) {
        this.reports.unshift(newReport);
    }
    displayAllReports() {
        console.log(this.reports);
    }
}
// Economics department
class Economics extends Deptmnt2 {
    constructor(id, analysis) {
        super(id, "Economics");
        this.analysis = analysis;
    }
    describe() {
        console.log("ID of department of " + this.name + " is " + this.id);
    }
}
// Using static method
const stream1 = Deptmnt2.createStream("Computer Engineering");
console.log(stream1);
// Instance of IT dept
const ITDept2 = new IT2("D001", ["Second report", "First report"]);
// Instance of economics dept
const EconomicsDept = new Economics("D002", ['Micro-economics']);
ITDept2.displayDept();
ITDept2.mostRecentReport = "Third report";
ITDept2.displayAllReports();
console.log(`Most recent report is: ${ITDept2.mostRecentReport}`);
// Use the abstract methods
ITDept2.describe();
EconomicsDept.describe();
