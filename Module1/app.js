"use strict";
let userInput;
let userName;
/**
 *  To assign a varaible with type 'unknown' to a string,
 *  first check if the type of the input is string
 */
if (typeof userInput === 'string') {
    userName = userInput;
}
// The "never" type
function throwError(message, errorCode) {
    throw { message, errorCode };
}
throwError("Something went wrong", 500);
