// Custom type
type name = "Negasi" | "Negu"
type sweetness = "Habibi" | "Hubi"
function addNumbers(input1: name, input2: sweetness){
    return input1.toString() + " " + input2.toString()
}

console.log(addNumbers("Negu", "Habibi"))