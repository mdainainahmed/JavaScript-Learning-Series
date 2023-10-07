const url = 'https://jsonplaceholder.typicode.com/users'


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async completed.")
//         resolve({username: "Ainain", age: 22})
//     }, 1000)
// })
// .then((response)=>{
//     console.log(response)
// }) 

// let name

// async function consumePromise(){
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         // console.log(data)
//         name = data[0].name
//         printName()
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
//     function printName(){
//         console.log(name)
//     }
// }
// consumePromise()


fetch(url)
.then((response)=>{
    const data = response.json()
    return data
})
.then((data)=>{
    console.log(data[0].name)
})