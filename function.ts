function sum(n1: number, n2: number){
    return n1+n2;
}

// Print sum
function printSum(sum: number){
    console.log(`Sum is: ${sum}`)
}


// Function as type
let funcAsType: (n1:number, n2:number)=> number;

// Store "sum" in "funcAsType"
funcAsType = sum;

// Execute funcAsType
funcAsType(8, 19)

// Use callback to print sum
function addAndHandle(n1: number, n2: number, cb: (result)=> void){
    const result = n1 + n2;
    cb(result)
}

addAndHandle(3, 4, (sum)=>{
    console.log(`Handled sum: ${sum}`)
})