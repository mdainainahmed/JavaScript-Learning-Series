
// function fun1 (){
//     console.log("I am a fun1")
// }

// fun1()

// function getSum( num1, num2, num3 )
// {
//     return num1+num2+num3
// }

// const result = getSum(3,4,5)
// console.log(result);




// const myArr = [0,1,2,3,4,5]

// function sumTill( orgArr ){
//     let length = orgArr.length

//     let sum = 0;

//     let newArr = []

//     for( let i = 0; i < length; i++ ){
//         sum += orgArr.at(i)
//         newArr.push(sum)
//     }

//     return newArr
// }

// const result = sumTill(myArr)
// console.log(result)



// const users = [
//     {
//         name: "Ainain",
//         loggedIn: true
//     },
//     {
//         name: "Shafai",
//         loggedIn: false
//     }
// ]

// function isLoggedIn( username ){

//     let name = username.name
//     let val = username.loggedIn

//     console.log( `${name} is ${val ? 'loggedIn' : 'loggedOut'}` )
// }

// isLoggedIn(users[0])
// isLoggedIn(users[1])




function sumTotal (...numbers){

    let sum = 0

    for( let i = 0; i < numbers.length; i++ )
        sum += numbers[i]

    return sum 
}

const result = sumTotal(1,2,3,4,5)
console.log(result)