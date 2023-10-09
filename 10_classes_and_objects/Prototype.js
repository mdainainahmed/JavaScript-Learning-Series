
const arr = ["Ainain", 5, {username: "Ahmed"}]

const myObj = {
    username: "Ainain",
    age: 22,
    getName: function(){
        console.log(`Username is ${this.username}`)
    }
}

// ++++++++++++++++++++   Inheritance   +++++++++++++++++++++++++
// Object is Parent, So all eg: Array, String, Number, etc.
Object.prototype.ainain = function(){
    console.log("Printing Ainain!!!")
}
// arr.ainain()

// No other like string can access Array's Prototype, as all are siblings
Array.prototype.printAhmed = function(){
    console.log("Printing Array!!!")
}
// arr.printAhmed()
// myObj.printAhmed()



// ++++++++++++ Prototypal Inheritance  ++++++++++++++++++++
const users = {
    username: "Ainain",
    email: "ainain@google.com"
}

const Teacher = {
    teaches: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    // old approach: don't use
// __proto__: TeachingSupport
}
// old approach: don't use
// TASupport.__proto__ = TeachingSupport

// new approach: use this
Object.setPrototypeOf(TASupport, TeachingSupport)
// console.log(TASupport)



// Example
let str = "Ainain   "

String.prototype.trueLength = function(){
    console.log(`Original String: ${this}`)
    console.log(`True Length: ${this.trim().length}`)
}
// str.trueLength()

" Ahmed   ".trueLength()
