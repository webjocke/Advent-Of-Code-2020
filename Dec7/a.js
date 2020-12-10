const fs = require("fs")
const content = fs.readFileSync("input.txt").toString()
const rows = content.split("\n")

let bags = {} 

rows.forEach((row) => {
    const spi = row.split("contain")
    ba = spi[0].replace('bags', '').trim()
    bags[ba] = spi[1].split(",").map(a => a.replace(/[0-9.]/g, '').replace('bags', '').replace('bag', '').trim())
    if (bags[ba][0] == "no other") bags[ba] = []
})
console.log(bags)

function findGold (bag) {
    //console.log("CHECKING", bag)
    if (bags[bag].includes("shiny gold")) return true
    for (let i = 0; i<bags[bag].length; i++) {
        const element = bags[bag][i]
        if (findGold(element)) return true
    }
    return false
}

console.log(Object.keys(bags).filter(bag => findGold(bag)).length)