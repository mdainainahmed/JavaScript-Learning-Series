// +++++++++++++++++    Object Literal  ++++++++++++++++++
// const user = {
//     username: "Ainain",
//     loginCount: 9,
//     login: true,
//     getUserDetails: function(){
//         // console.log(`User Details: {username: ${this.username}, login: ${this.login}}`)
//         console.log(this);
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())


// +++++++++++++++++    Constructor Function    +++++++++++++++++++++++
function User(username, loginCount, login){
    this.username = username
    this.loginCount = loginCount
    this.login = login
    this.getUserDetails = function(){
        console.log(`User Details: {username: ${this.username}, login: ${this.login}}`)
    }
    // console.log(this)
}

const user1 = new User("Ainain", 9, false)
const user2 = new User("Ahmed", 2, true)
console.log(user1.getUserDetails())

