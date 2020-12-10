const fs = require("fs")
const content = fs.readFileSync("input.txt").toString()
const instuctions = content.split("\n").map((instuction)=>{
    const temp = instuction.split(" ")
    return [temp[0], parseInt(temp[1])]
})

function getAllIndexes(arr, val) {
    var indexes = []
    arr.forEach((item, index)=>{
        if (item[0] == val) {
            indexes.push(index)
        }
    })
    return indexes
}

function start(nice_instuctions) {
    let banned_ganstnass = []
    let continuee = true
    let hotline = 0
    let totti = 0
    while (continuee) {
        if (banned_ganstnass.includes(hotline)) {
            return [false, totti]
        }
        banned_ganstnass.push(hotline)
        if (nice_instuctions[hotline][0] == "nop") {
            hotline += 1
        } else if (nice_instuctions[hotline][0] == "acc") {
            totti += nice_instuctions[hotline][1]
            hotline += 1
        } else if (nice_instuctions[hotline][0] == "jmp") {
            hotline += nice_instuctions[hotline][1]
        }
        if (hotline == nice_instuctions.length) {
            return [true, totti]
        }
    }
}

const to_try = [...getAllIndexes(instuctions, "jmp"), ...getAllIndexes(instuctions, "nop")]
let i = 0
let continuueeee = true
while (continuueeee) {
    const try_index = to_try[i]
    const temp_instuctions = JSON.parse(JSON.stringify(instuctions))
    temp_instuctions[try_index][0] = temp_instuctions[try_index][0] == "jmp" ? "nop" : "jmp"
    const maybe = start(temp_instuctions)
    if (maybe[0]) {
        console.log("YEY", maybe[1])//, try_index)
        continuueeee = false
    }
    if (i+1 >= to_try.length) {
        continuueeee = false
    } else {
        i += 1
    }
}