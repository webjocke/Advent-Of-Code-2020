const fs = require("fs")
const content = fs.readFileSync("input_a.txt").toString()
const items = content.split("\n")
items.forEach((item)=>{
    items.forEach((item2)=>{
        items.forEach((item3)=>{
            if (parseInt(item)+parseInt(item2)+parseInt(item3) == 2020) {
                console.log(item*item2*item3)
            }
        })
    })
})