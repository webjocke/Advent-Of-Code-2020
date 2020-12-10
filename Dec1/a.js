const fs = require("fs")
const content = fs.readFileSync("input_a.txt").toString()
const items = content.split("\n")
items.forEach((item)=>{
    items.forEach((item2)=>{
        if (parseInt(item)+parseInt(item2) == 2020) {
            console.log(item*item2)
        }
    })
})