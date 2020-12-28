const fs = require("fs")
const inputi = fs.readFileSync("input.txt").toString().split("\r\n").map(x => parseInt(x))
console.log(inputi)
const isValid = (sub_list, siffran) => {
    for (let i1 = 0; i1 < sub_list.length; i1++) {
        for (let i2 = 0; i2 < sub_list.length; i2++) {
            if (i1 != i2 && sub_list[i1] + sub_list[i2] == siffran) return true
        }
    }
    return false
}
for (let hej = 25; hej<inputi.length; hej++) {
    if (!isValid(inputi.slice(Math.max(hej-25, 0), hej), inputi[hej])) console.log("YEY", inputi[hej])
}