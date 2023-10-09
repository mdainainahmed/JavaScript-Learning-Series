//+++++++++++++++++++++++++     Understanding Call Stack        +++++++++++++++++++
/*
function print(val){
    console.log(val)
}
function setUsername(username){
    this.username = username
    print(this.username)
}
function outer(username, email, pass){
    setUsername(username)
    this.email = email
    this.pass = pass
}
// Every Function will be given Memory in Executional Context 


// Creating new instance of outer
const userOuter = new outer("Ainain", "ainain@google.com", "123")

// When outer will call setUsername() Line: 10
// Now, setUsername will create its own instance with username property and will insert the update its own username property Line: 6
// see the output when printVal() is called Line: 7
// hence setUsername will not change the instance of outer created by Line: 17
console.log(userOuter)
*/


// +++++++++++++++++++      Understand .call()      ++++++++++++++++++++++++++
function print(val){
    console.log(val)
}
function setUsername(username){
    this.username = username
    print(this.username)
}
function outer(username, email, pass){
    // .call(this, ) will remeber the current execution context
    setUsername.call(this, username)
    this.email = email
    this.pass = pass
}

const userOuter = new outer("Ainain", "ainain@google.com", "123")
console.log(userOuter)