const myArr = ["Md", "Ainain", "Ahmed", "Ejaz", "Hussain", "Hashmi"]

// myArr.forEach( (value) => { console.log(value) } )

// for (const iterator of myArr) {
//     console.log(iterator);   
// } 

// myArr.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

const myArrOfObj = [
    {
        name: "Ainain",
        age: 22
    },
    {
        name: "Shafai",
        age: 23
    },
    {
        name: "Taha",
        age: 24
    }
]

myArrOfObj.forEach( ( obj ) => { console.log(obj.name) } )