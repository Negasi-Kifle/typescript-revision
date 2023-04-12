let userInput: unknown;

let userName: string;

/**
 *  To assign a varaible with type 'unknown' to a string, 
 *  first check if the type of the input is string
 */
if(typeof userInput === 'string'){
    userName = userInput;
}

// The "never" type
function throwError (message: string, errorCode: number): never{
    throw{message, errorCode}
}

throwError("Something went wrong", 500)