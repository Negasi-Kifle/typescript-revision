// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// Object type
// const person: {name: string, age: number, hobbies: string[], role: [string, number]} = {
var person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"],
    role: Role.ADMIN
};
console.log(person.role);
// console.log("Admin index: ", Role.ADMIN)
// console.log(person.hobbies)
// Declare an arry that stores string 
var favFood;
favFood = ['Mendi'];
// console.log(favFood)
// A function with object type as a parameter
// function greet (person: {name: string, age: number}){
//     console.log(`Hello, ${person.name}`)
// }
// greet( {
//     name: "Negasi",
//     age: 27
// })
