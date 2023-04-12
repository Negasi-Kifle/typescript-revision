// Enums
enum Role {ADMIN, READ_ONLY, AUTHOR}

// Assign the first member and get other members assigned automaticaly
enum Role2 {ADMIN=9, READ_ONLY, AUTHOR}

// Assign random number to random memeber
enum Role3 {ADMIN, READ_ONLY=7, AUTHOR}

// Assign any random number to the members
enum Role4 {ADMIN=23, READ_ONLY=12, AUTHOR=45}

// Assign any value to memebers
enum Role5 {ADMIN="ADMIN", READ_ONLY=6, AUTHOR="AUTHOR"}

// Object type
// const person: {name: string, age: number, hobbies: string[], role: [string, number]} = {
    const person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"],
    role: Role.ADMIN
}

console.log(person.role)
// console.log("Admin index: ", Role.ADMIN)
// console.log(person.hobbies)

// Declare an arry that stores string 
let favFood: string[];
favFood = ['Mendi']
// console.log(favFood)

// A function with object type as a parameter
// function greet (person: {name: string, age: number}){
//     console.log(`Hello, ${person.name}`)
// }

// greet( {
//     name: "Negasi",
//     age: 27
// })
