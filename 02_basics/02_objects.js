
const mySym = Symbol("key")

const myObj = {
    name: "Ainain",
    "full name": "Md Ainain Ahmed",
    // using mySym
    [mySym]: "my key",
    age: 21,
    location: "Delhi",
    email: "ainain@gmail.com",
    isLogedIn: false,
    lastlogin: ["Mon", "Fri"]
}

// console.log(myObj)
// console.log(myObj.name)
// console.log(myObj["name"])
// console.log(myObj["full name"])
// console.log(myObj[mySym])

// myObj.name = "Ahmed"
// console.log('A', myObj.name)

// Object.freeze(myObj)
// myObj.age = 24
// console.log('B', myObj.age)

// myObj.greetings = function() {
//     console.log(`Hii ${this.name}! You are invited....  `)
// }

// // console.log(myObj.greetings)
// console.log(myObj.greetings())

// const obj2 = {
//     email: "ainain@gmail.com",
//     name: {
//         fullName: {
//             firstName: "Md",
//             middleName: "Ainain",
//             lastName: "Ahmed"
//         }
//     },
//     age: 21,
//     location: "Delhi"
// }

// console.log(obj2.name.fullName.middleName)

// const obj3 = { 1: 'a', 2: 'b' }
// const obj4 = { 3: 'c', 4: 'd' }

// const obj5 = {...obj3, ...obj4}
// console.log(obj5)

Object.freeze(myObj)


