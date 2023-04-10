// Object type
//const person: {name: string, age: number} = {
    const person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"]
}

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
