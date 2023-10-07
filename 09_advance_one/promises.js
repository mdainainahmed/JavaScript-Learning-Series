// ++++++++++++++++++++     .then(),        .catch(),       .finally()      ++++++++++++++++++++++
/*
// Creating promise one
//  Promise takes a function with resolve and reject as a parameter
const promiseOne = new Promise (function(resolve, reject){
    setTimeout(() => {
        console.log("Async 1 completed")
        // linking resolve with then
        resolve()
    }, 1000);
})
// .then takes a function 
promiseOne.then(function(){
    console.log("Promise 1 resolved.")
})




// Creating promise 2
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async 2 completed")
        // linking resolve with then
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise 2 resolved.")
})





// Creating promise 3
const promiseThree = new Promise (function(resolve, reject){
    setTimeout(() => {
        console.log("Async 3 completed")
        // linking resolve with .then
        // sending an object as a response
        resolve({username: "Ainain", email: "ainain@google.com"})
    }, 1000);
})
// .then takes a function which has a parameter returned by async i.e, an object in this case
promiseThree.then(function(userInfo){
    console.log("Promise 3 resolved.")
    console.log(`Username: ${userInfo.username}, Email-Id: ${userInfo.email}`)
})





// Creating promise four
const promiseFour = new Promise( function(resolve, reject){
    setTimeout(() => {
        // delared error to study catch
        let error = true;
        
        // Resolved
        if(!error){
            console.log("Async 4 completed")
            resolve({username: "Ainain", email: "ainain@google.com"})
        }
        // Rejected
        else {
            // linking reject with .catch
            reject('ERROR: Something went wrong.....')
        }
    }, 1000);
} )
promiseFour.then(function(userInfo){
    console.log("Promise 4 resolved.")
    console.log(`Username: ${userInfo.username}, Email-Id: ${userInfo.email}`)
}).catch(function(message){
    console.log(message)
})



// Creating promise five
// learning chaning of .then(), and understand what and where .then() returns
// learning finally()
const promiseFive = new Promise( function(resolve, reject){
    setTimeout(() => {
        // delared error to study catch
        let error = false;
        
        // Resolved
        if(!error){
            console.log("Async 5 completed")
            resolve({username: "Ainain", email: "ainain@google.com"})
        }
        // Rejected
        else {
            // linking reject with .catch
            reject('ERROR: Something went wrong.....')
        }
    }, 1000);
} )
promiseFive
.then(function(userInfo){
    console.log("Promise 5 resolved.")
    return userInfo.username
})
// or you could have just used () => (), as we are returning just a value
// .then((userInfo) => (
//     userInfo.username
// ))
// now the above .then() is returning only username which is being passed to next .then()
.then(function(username){
    console.log(username)
})
.catch(function(message){
    console.log(message)
})
// .finally() is default, it always runs
// takes function as ans input
.finally(function(){
    console.log("Either Resolved or Rejected")
})
*/




// +++++++++++++++++++++++++++++++++     async await method     ++++++++++++++++++++
/*
// Creating promise six
const promiseSix = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // delared error to study catch
        let error = false;
        
        // Resolved
        if(!error){
            console.log("Async 6 completed")
            resolve({username: "Ainain", email: "ainain@google.com"})
        }
        // Rejected
        else {
            // linking reject with .catch
            reject('ERROR: Something went wrong.....')
        }
    }, 1000)
} )
// declaring an async function for consuming promise
async function consumePromise(){
    // try for handling resolve, and catch for handling reject
    try {
        // using await because this process takes time so wait...
        const response = await promiseSix
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
// calling async function
consumePromise()
*/





// ++++++++++++++++++++++++++++         fetch()  method        +++++++++++++++++++++++
//  fetch() takes a URL as string, and return a promise 
// promise is an object so we have to further convert it into json format
// async function getAllUsers(){
//     try {
//         // using await because fetch() takes time so wait...
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(typeof response)
//         // console.log(response)

//         // converting the reponse to json format
//         // using await because conversion of response to json format takes time so wait...
//         const data = await response.json()
//         console.log(data[0].name)
//     } catch (error) {
//         console.log(`ERROR: ${error}`)
//     }

// }
// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
    
})
.then( (data) => {
    console.log(data[0].name)
})
.catch( (error) => {
    console.log(`ERROR: ${error}`)
})