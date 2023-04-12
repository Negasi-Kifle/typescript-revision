"use strict";
function adder(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
const fullName = adder("Negasi", "Kiflom");
console.log("Full name: ", fullName);
const age = adder(24, 3);
console.log(`Age: ${age}`);
