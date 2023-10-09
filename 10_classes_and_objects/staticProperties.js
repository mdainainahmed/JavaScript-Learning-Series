// ES6
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `USERNAME is ${this.username}`
    }
    
    // static property
    // will not give access to anyone
    static generateID(){
        return parseInt(Math.random()*10)
    }

    // not even here, inside class, give access of static property
    // getId(){
    //     console.log(this.generateID())
    // }
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

const usr1 = new User("ainain")
console.log(usr1)
console.log(usr1.logMe())
// console.log(usr1.generateID())

const thr1 = new Teacher("Ahmed", "ahmed@google.com", "123")
console.log(thr1)
console.log(thr1.assignCourse())
console.log(thr1.logMe())
// console.log(thr1.getId())
// console.log(thr1.generateID())
