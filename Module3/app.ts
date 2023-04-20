class Department{
    name: string;
    private employee: string[] = [];

    constructor(name: string){
        this.name = name
    }

    displayDept(){
        console.log("This is department of "+ this.name);
    }

    addEmp(employee: string){
        this.employee.push(employee)
    }

    getAllEmps(){
        console.log(this.employee.length);
        console.log(this.employee)
    }
}

const dept = new Department("Computer Engineering")

dept.displayDept();

const deptCopy = {describe: dept.displayDept()}

deptCopy.describe;

dept.addEmp("Negasi")
dept.addEmp("Kiflom")
// dept.employee[2] = "Kidane"
dept.getAllEmps()