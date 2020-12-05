
const fs = require("fs")
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const passports = fs.readFileSync("input.txt").toString().split("\r\n\r\n")
const passports_with_fields = passports.map(item=> item.split(/\s+/).map(i=>i.split(":")[0]))
const valids = passports_with_fields.filter(pass => required.every(element => pass.indexOf(element) >=0))
console.log("A:", valids.length)