"use strict";
class Faculty {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.departments = [];
        //
    }
    static getInstance() {
        if (Faculty.instance) {
            return Faculty.instance;
        }
        else {
            this.instance = new Faculty("F001", "Engineering");
            return Faculty.instance;
        }
    }
    addDepartment(department) {
        this.departments.push(department);
    }
}
const faculty = Faculty.getInstance();
const faculty2 = Faculty.getInstance();
console.log(faculty);
console.log(`Faculty name: ${faculty2.name}`);
