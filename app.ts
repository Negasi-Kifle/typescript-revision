// //const person: {name: string, age: number} = {
//     const person = {
//     name: "Negasi",
//     age: 27
// }

// console.log(person.name)
function greet (person: {name: string, age: number}){
    console.log(`Hello, ${person.name}`)
}

greet( {
    name: "Negasi",
    age: 27
})