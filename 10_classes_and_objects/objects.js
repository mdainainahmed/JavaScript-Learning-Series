function multiply5(num){
    return num*5
}
multiply5.power = 2

// console.log(multiply5(4))
// console.log(multiply5.power)
// console.log(multiply5.prototype)


function User(username, score){
    this.username = username;
    this.score = score;
}

User.prototype.marks = 2;

User.prototype.increment = function(){
    this.score++;
}

User.prototype.printMe = function(){
    console.log(`User Details: {Username: ${this.username}, Score: ${this.score}}`);
}

const user1 = new User("Ainain", 25)
const user2 = new User("Taha", 37)
// user1.increment()
// console.log(user1.printMe(), user2.printMe(), user1.marks)
console.log(User.prototype)
