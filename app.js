function sum(n1, n2) {
    return n1 + n2;
}
// Print sum
function printSum(sum) {
    console.log("Sum is: ".concat(sum));
}
// Function as type
var funcAsType;
// Store "sum" in "funcAsType"
funcAsType = sum;
// Execute funcAsType
funcAsType(8, 19);
// Use callback to print sum
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(3, 4, function (sum) {
    console.log("Handled sum: ".concat(sum));
});
