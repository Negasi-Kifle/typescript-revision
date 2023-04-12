"use strict";
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// Assign the first member and get other members assigned automaticaly
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 9] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 10] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 11] = "AUTHOR";
})(Role2 || (Role2 = {}));
// Assign random number to random memeber
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 0] = "ADMIN";
    Role3[Role3["READ_ONLY"] = 7] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 8] = "AUTHOR";
})(Role3 || (Role3 = {}));
// Assign any random number to the members
var Role4;
(function (Role4) {
    Role4[Role4["ADMIN"] = 23] = "ADMIN";
    Role4[Role4["READ_ONLY"] = 12] = "READ_ONLY";
    Role4[Role4["AUTHOR"] = 45] = "AUTHOR";
})(Role4 || (Role4 = {}));
// Assign any value to memebers
var Role5;
(function (Role5) {
    Role5["ADMIN"] = "ADMIN";
    Role5[Role5["READ_ONLY"] = 6] = "READ_ONLY";
    Role5["AUTHOR"] = "AUTHOR";
})(Role5 || (Role5 = {}));
// Object type
// const person: {name: string, age: number, hobbies: string[], role: [string, number]} = {
const person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"],
    role: Role.ADMIN
};
console.log(person.role);
// console.log("Admin index: ", Role.ADMIN)
// console.log(person.hobbies)
// Declare an arry that stores string 
let favFood;
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
