function multiply5(num){
    return num*5
}
multiply5.power = 2

// console.log(multiply5(4))
// console.log(multiply5.power)
// console.log(multiply5.prototype)


function  add10( num ){
    return num+10
}
const fun1 = function fun(num){
    this.val = num
    return num*2
}

add10.myFun = fun1

console.log(add10(4))
console.log(add10.myFun(3))
console.log(add10)