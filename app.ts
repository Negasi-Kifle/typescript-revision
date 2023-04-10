// Object type
// const person: {name: string, age: number, hobbies: string[], role: [string, number]} = {
    const person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"],
    role: ["Admin", 12]
}

person.role[0] = 85;
console.log(person.role)
console.log(person.hobbies)

// Declare an arry that stores string 
let favFood: string[];
favFood = ['Mendi']
console.log(favFood)

// Loop through all hobbies and print them all
for(const hobby of person.hobbies){
    console.log(hobby)
}

// A function with object type as a parameter
// function greet (person: {name: string, age: number}){
//     console.log(`Hello, ${person.name}`)
// }

// greet( {
//     name: "Negasi",
//     age: 27
// })
