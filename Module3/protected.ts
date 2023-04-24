class Dept{
    protected employees: string[] = [];
    // private employees: string[] = [];
    constructor(private id: string, public name: string){
        //
    }

    displayDept (){
        console.log("This is dept of: "+ this.name + " with id of "+ this.id)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    getAllEmps(){
        console.log(this.employees)
    }
}

class Accounting extends Dept{
    constructor(id: string){
        super(id, "Software Engineering")
    }
     
    addEmployee(employee: string): void {
        this.employees.push(employee)
    }
}

const newDepts = new Software("D001")

newDept.displayDept()