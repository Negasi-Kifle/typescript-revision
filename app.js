var userInput;
var userName;
/**
 *  To assign a varaible with type 'unknown' to a string,
 *  first check if the type of the input is string
 */
if (typeof userInput === 'string') {
    userName = userInput;
}
function throwError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
throwError("Something went wrong", 500);
