const fs = require("fs")
const content = fs.readFileSync("input_a.txt").toString()
const items = content.split("\n").map((item)=>{
    const colon_split = item.split(":").map(item => item.trim())
    const first_half_split = colon_split[0].split(" ")
    const streck_split = first_half_split[0].split("-")
    return {
        one: parseInt(streck_split[0]),
        two: parseInt(streck_split[1]),
        char: first_half_split[1],
        pass: colon_split[1]
    }
})
const valid_passwords = items.filter((i)=>{
    if ((i.pass[i.one-1] == i.char && i.pass[i.two-1] != i.char) || (i.pass[i.one-1] != i.char && i.pass[i.two-1] == i.char)) {
        return true
    }
    return false
})
console.log(valid_passwords.length)
