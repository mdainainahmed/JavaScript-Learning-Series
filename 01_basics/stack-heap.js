//  Stack : Primitive DataType uses Stack
// let var1_Original = 5
// let var1_Duplicate = var1_Original

// var1_Duplicate = "Changed"
// console.log(var1_Original, var1_Duplicate)


// Heap : Non-Primitive DataType uses Heap
let original = ["IronMan", "Hulk"]
let duplicate = original
duplicate[1] = "Chicago"

console.log(original[1], duplicate[1])