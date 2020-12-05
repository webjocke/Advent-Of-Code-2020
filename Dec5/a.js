const fs = require("fs")
const boardingpasses = fs.readFileSync("input.txt").toString().split("\r\n")

getHalf = (list, char) => char == "F" || char == "L" ? list.splice(0, list.length / 2) : list.splice(-(list.length / 2)) // F=Lower Half or B=Upper half
getSeat = pass => {
    const row = Array.from(pass.substring(0,7)).reduce(function(result,char) {
        return getHalf(result, char)
    }, Array.from(Array(128).keys()))[0]
    const column = Array.from(pass.substring(7,10)).reduce(function(result,char) {
        return getHalf(result, char)
    }, Array.from(Array(8).keys()))[0]
    return [row, column, ((row*8)+column)]
}

const seats = boardingpasses.map( pass => getSeat(pass)[2])
console.log("Max:", Math.max(...seats))

mySeat = ()=>{
    me = 0
    conti = true
    while (conti) {
        if (seats.includes(me-1) && !seats.includes(me) && seats.includes(me+1)) {
            conti = false
        } else {
            me += 1
        }
    }
    return me
}

console.log(mySeat())