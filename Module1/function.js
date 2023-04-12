"use strict";
function sum(n1, n2) {
    return n1 + n2;
}
// Print sum
function printSum(sum) {
    console.log(`Sum is: ${sum}`);
}
// Function as type
let funcAsType;
// Store "sum" in "funcAsType"
funcAsType = sum;
// Execute funcAsType
funcAsType(8, 19);
// Use callback to print sum
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(3, 4, (sum) => {
    console.log(`After handling the sum: ${sum}`);
});
