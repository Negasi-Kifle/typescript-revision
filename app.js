// Object type
var person = {
    // const person = {
    name: "Negasi",
    age: 27,
    hobbies: ["Cooking", "Sport"],
    role: ["Admin", 12]
};
person.role[1] = 85;
console.log(person.role);
console.log(person.hobbies);
// Declare an arry that stores string 
var favFood;
favFood = ['Mendi'];
console.log(favFood);
// Loop through all hobbies and print them all
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// A function with object type as a parameter
// function greet (person: {name: string, age: number}){
//     console.log(`Hello, ${person.name}`)
// }
// greet( {
//     name: "Negasi",
//     age: 27
// })
