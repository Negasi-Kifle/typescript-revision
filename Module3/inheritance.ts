class Departments{
    private employees: string[] = [];
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

class Software extends Departments{
    constructor(id: string){
        super(id, "Software Engineering")
    }
}

const newDept = new Software("D001")

newDept.displayDept()