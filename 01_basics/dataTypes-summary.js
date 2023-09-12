// Primitive 
// 7 types: String, Number, BitInt, Boolean, null, undefined, Symbol
let useName = "Ainain"
let userMoibile = 1234567890
let userHash = 1556248651425565232143n
let isLoggedIn = false
let tempOutside = null
let userAge;
let userId = Symbol("123")
let userPassword = Symbol("123")

// console.log(userId === userPassword)


// Reference ( Non-Primitive )
// Array, Objects, Function
const heros = ["IronMan", "SpiderMan", "Hulk"];
let villains = {
    name: "Dr Octavious",
    age: 27,
}

const myFunction = function () {
    console.log("I am a function")
}

console.log(typeof heros)
console.log(typeof villains)
console.log(typeof myFunction)