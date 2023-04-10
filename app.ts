// Custom type
type name = "Negasi" | "Negu"
type sweetness = "Habibi" | "Hubi"
function add(input1: name, input2: sweetness){
    return input1.toString() + " " + input2.toString()
}

console.log(add("Negu", "Habibi"))