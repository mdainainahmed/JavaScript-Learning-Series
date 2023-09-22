
// const obj = {

//     username: "Ainain",
//     isLoggedIn: true,

//     welcomeMessage: function(){

//         if( this.isLoggedIn ){
//             console.log(`Hii ${this.username}! Welcome to our Js Series....`)
//             return
//         }
//         console.log("Oops! You're Logged Out...") 
//     }
// }

// obj.welcomeMessage()


// const fun1 = ( num1, num2 ) => {
//     return num1 + num2
// }

// console.log(fun1(3,5))


// const fun1 = ( num1, num2 ) => ( num1 + num2 )


// const fun1 = ( num1, num2 ) => ( { username: "Ainain"} )

( (name) => {
    console.log(`Hii ${name}! How are U ?`)
})("Ainain");

( (name) => {
    console.log(`Hii ${name}! How are U ?`)
})("Ahmed")

console.log("Md")