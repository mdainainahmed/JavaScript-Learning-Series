const date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toLocaleString('en-IN'))

// console.log(Date.now())

// const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"]
// const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// console.log(`Today's Day: ${day[date.getDay()-1]}, Date: ${date.getDate()}, Month: ${month[date.getMonth()]}, & Year: ${date.getFullYear()}`)

console.log(date.toLocaleString('default', {
    month: "long"
}))