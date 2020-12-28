const fs = require("fs")
const inputi = fs.readFileSync("input.txt").toString().split("\r\n").map(x => parseInt(x))
const isValid = (index) => {
    let saved_number = [], current_total = 0
    while (true) {
        saved_number.push(inputi[index])
        current_total += inputi[index]
        index += 1
        if (current_total == 542529149) return saved_number
        if (current_total > 542529149 || index > inputi.length-1) return false
    }
}
for (let hej = 0; hej < inputi.length; hej++) {
    res = isValid(hej)
    if (res) console.log("YEY", res, Math.min(...res)+Math.max(...res))
}