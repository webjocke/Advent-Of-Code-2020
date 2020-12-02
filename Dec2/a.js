const fs = require("fs")
const content = fs.readFileSync("input_a.txt").toString()
const items = content.split("\n").map((item)=>{
    const colon_split = item.split(":").map(item => item.trim())
    const first_half_split = colon_split[0].split(" ")
    const streck_split = first_half_split[0].split("-")
    return {
        min: parseInt(streck_split[0]),
        max: parseInt(streck_split[1]),
        char: first_half_split[1],
        password: colon_split[1]
    }
})
const valid_passwords = items.filter((item)=>{
    const count = item.password.split(item.char).length - 1
    if (count <= item.max && count >= item.min) {
        return true
    } else {
        return false
    }
})
console.log(valid_passwords.length)

// 506