class Deptmnt {
    private employees: string[] = [];

    constructor(private id: string, public name: string){
        //
    }

    displayDept(){
        console.log("This is department of: ", this.name + " with an id of "+ this.id)
    }
    addEmp(emp: string){
        this.employees.push(emp)
    }

    displayEmps(){
        console.log(this.employees)
    }
    
}

// IT department
class IT extends Deptmnt{
    constructor( id: string, private reports:string[]){
        super(id, "IT");
    }

    // Getter to get most recent report
    get mostRecentReport(){
        if(this.reports.length > 0){
            return this.reports[0];
        }else{
            throw new Error("No reports at all")
        }
    }

    set mostRecentReport(value: string){
        if(!value) throw new Error("Please provide a valid value")
        this.addReport(value)
    }

    addReport(newReport: string){
        this.reports.unshift(newReport)
    }

    displayAllReports(){
        console.log(this.reports)
    }    
}

// Instance of IT dept
const ITDept = new IT("D001", ["Second report", "First report"])

ITDept.displayDept();
ITDept.mostRecentReport = "Third report"
ITDept.displayAllReports()
console.log(`Most recent report is: ${ITDept.mostRecentReport}`)