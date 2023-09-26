// const myArr = [1,2,3,4,5,6,7]

// const initialValue = 0;

// const res = myArr.reduce( ( accumulator, currentValue ) =>  (accumulator + currentValue), initialValue  )

// console.log(res)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce( ( accumulator, item ) => ( accumulator + item.price ), 0 )

console.log(totalPrice);