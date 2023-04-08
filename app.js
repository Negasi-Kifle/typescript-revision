function add(n1, n2, showResult) {
    var result = n1 + n2;
    if (showResult) {
        console.log("Result is: ".concat(result));
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 2.8;
var showResult = true;
add(num1, num2, showResult);
