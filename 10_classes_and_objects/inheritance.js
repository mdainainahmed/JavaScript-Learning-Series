// ES6
/*
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `USERNAME is ${this.username}`
    }
}

class Teacher extends User{

    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    assignCourse(){
        return `A new Course is assigned to ${this.username}`
    }
}

const thr1 = new Teacher("ainain", "ainain@google.com", "123")
console.log(thr1)
console.log(thr1.assignCourse())
console.log(thr1.logMe())
*/


//  +++++++++++++++++++++++++++     Behind the scene    ++++++++++++++++
function User(username){

    this.username = username

    this.logMe = function(){
        return `USERNAME is ${this.username}`
    }
}

function Teacher(username, email, password){

    User.call(this,username)
    this.email = email
    this.password = password

    this.assignCourse = function(){
        return `A new Course is assigned to ${this.username}`
    }
}

const thr1 = new Teacher("ainain", "ainain@google.com", "123")
console.log(thr1)
console.log(thr1.assignCourse())
console.log(thr1.logMe())