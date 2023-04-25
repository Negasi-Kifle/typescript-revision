class Faculty{
    private departments: string[] = [];
    private static instance: Faculty;

    private constructor(private id: string, public name: string){
        //
    }

    static getInstance(): Faculty{
        if(Faculty.instance){
            return Faculty.instance;
        }else{
           this.instance = new Faculty("F001", "Engineering");
            return Faculty.instance
        }
    }

    addDepartment(department: string){
        this.departments.push(department)
    }
}

const faculty = Faculty.getInstance();
const faculty2 = Faculty.getInstance();
console.log(faculty)
console.log(`Faculty name: ${faculty2.name}`)