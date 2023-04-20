class Department{
    // private id: string;
    // name: string;
    private employee: string[] = [];

    constructor(private id: string, public name: string){
        // this.id = id;
        // this.name = name
    }

    displayDept(){
        console.log("This is department of "+ this.name + " with id of: "+ this.id);
    }

    addEmp(employee: string){
        this.employee.push(employee)
    }

    getAllEmps(){
        console.log(this.employee.length);
        console.log(this.employee)
    }
}

const dept = new Department("D001", "Computer Engineering")

dept.displayDept();

const deptCopy = {describe: dept.displayDept()}

deptCopy.describe;

dept.addEmp("Negasi")
dept.addEmp("Kiflom")
// dept.employee[2] = "Kidane"
dept.getAllEmps()