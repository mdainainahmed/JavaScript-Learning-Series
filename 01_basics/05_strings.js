const game = "Ainain"
console.log(game)

const gameName = new String("Shafai")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))
console.log(gameName.endsWith('i'))

const newString = gameName.substring(1,2)
console.log(newString);

const repString = gameName.slice(-7,2)
console.log(repString)

const name = "    jsdd  "
console.log(name.trim());
console.log(name.trimStart())
console.log(name.trimEnd())

const url = "https://mdainainahmed%20site@google.com"
console.log(url.replace("%20", "-"))
console.log(url.includes("site"))

const myName = "md-ainain-ahmed"
const nameArray = myName.split('-')
console.log(nameArray)