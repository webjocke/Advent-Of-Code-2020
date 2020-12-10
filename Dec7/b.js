const fs = require("fs")
const content = fs.readFileSync("input.txt").toString()
const rows = content.split("\n")

let bags = {}

rows.forEach((row) => {
    const spi = row.split("contain")
    const ba = spi[0].replace('bags', '').trim()
    if (spi[1] == " no other bags.") {
        bags[ba] = []
    } else {
        bags[ba] = spi[1].split(",").map(a => {
            const words = a.trim().split(" ")
            const number = parseInt(words.shift())
            baggieboy = words.join(" ").replace(".", "").replace("bags", "").replace("bag", "").trim()
            return [number, baggieboy]
        })
    }
})

function getNumber (bag) {
    if (bags[bag].length == 0) return 1
    let total = 1
    for (let i = 0; i<bags[bag].length; i++) {
        total += getNumber(bags[bag][i][1]) * bags[bag][i][0]
    }
    return total
}

console.log(getNumber("shiny gold")-1)