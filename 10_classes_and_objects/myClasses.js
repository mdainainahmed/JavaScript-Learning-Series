// ES6
/*
class User{
    // constructor is called implicitly when 'new' keyword is called
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }   

    // method
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const usr1 = new User("Ainain", "ainain@google.com", "123")
console.log(usr1)
console.log(usr1.encryptPassword())
console.log(usr1.changeUsername());
*/

// +++++++++++++++++++  Behind the scene    +++++++++++++++++

// creating constructor function
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password

    this.encryptPassword = function(){
        return `${this.password}abc`
    }

    this.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }
}
// or use below.......... add methods
/*
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
*/

// creating an instance of 'User' using 'new' keyword
const usr1 = new User("Ainain", "ainain@google.com", "123")
console.log(usr1)
console.log(usr1.encryptPassword())
console.log(usr1.changeUsername());