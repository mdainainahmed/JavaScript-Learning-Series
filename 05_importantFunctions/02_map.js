
const myArr = [ 1, 2, 3, 4, 5 ]

const result = myArr.map( (val) => ( val + 10 ) )

const res = myArr
            .map( (val) => val * 10 )
            .map( (val) => val + 1 )
            .filter( (val) => val > 40 )

// console.log(result)
console.log(res)