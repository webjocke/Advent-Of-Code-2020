
const fs = require("fs")
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const passports = fs.readFileSync("input.txt").toString().split("\r\n\r\n").map(item=> item.split(/\s+/))

const passwords_with_all_required = passports.filter(pass => required.every(element => pass.map(i2=>i2.split(":")[0]).indexOf(element) >=0))

const valid_passports = passwords_with_all_required.filter((passport)=>{
    for (let i = 0; i<passport.length; i++) {
        const temp = passport[i].split(":")
        const field = temp[0]
        const value = temp[1]
        switch(field) {
            case "byr":
                // byr (Birth Year) - four digits; at least 1920 and at most 2002.
                console.log("byr")
                if (value.length != 4) return false
                if (parseInt(value) < 1920) return false
                if (parseInt(value) > 2002) return false
                console.log("byr ok")
                break

            case "iyr":
                // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
                console.log("iyr")
                if (value.length != 4) return false
                if (parseInt(value) < 2010) return false
                if (parseInt(value) > 2020) return false
                console.log("iyr ok")
                break

            case "eyr":
                // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
                if (value.length != 4) return false
                if (parseInt(value) < 2020) return false
                if (parseInt(value) > 2030) return false
                break

            case "hgt":
                // hgt (Height) - a number followed by either cm or in:
                //   If cm, the number must be at least 150 and at most 193.
                //   If in, the number must be at least 59 and at most 76.
                if (value.endsWith("cm")) {
                    if (parseInt(value) < 150) return false
                    if (parseInt(value) > 193) return false
                } else if (value.endsWith("in")) {
                    if (parseInt(value) < 59) return false
                    if (parseInt(value) > 76) return false
                } else {
                    return false
                }
                break

            case "hcl":
                // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
                if (!(/^#[a-f0-9]{6}$/.test(value))) return false
                break

            case "ecl":
                // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
                if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)) return false
                break

            case "pid":
                // pid (Passport ID) - a nine-digit number, including leading zeroes.
                if (!(/^[0-9]{9}$/.test(value))) return false
                break

        }
    }
    return true
})

console.log("B:", valid_passports.length)