const fs = require("fs")
const groups = fs.readFileSync("input.txt").toString().split("\r\n\r\n").map(someText => someText.split("\r\n"))
const nice = groups.map(group => {
    const chars = Array.from(group.join(''))
    let count = {}
    for (let i = 0; i<chars.length; i++) {
        const vote = chars[i]
        if (count[vote]) {
            count[vote] += 1
        } else {
            count[vote] = 1
        }
    }
    return Object.keys(count).filter(char => count[char] == group.length)
})
const numbers = nice.map(item => item.length)
const number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(number)