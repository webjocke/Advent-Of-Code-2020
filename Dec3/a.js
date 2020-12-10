
const fs = require("fs")
const content = fs.readFileSync("input.txt").toString()
const items = content.split("\r\n")

function getTrees(right, down) {
    width=items[0].length
    y = 0
    x = 0
    trees = 0
    not_trees = 0

    not_done = true
    while (not_done) {
        y += down
        x += right
        if (x >= width) {
            x = x-width
        }
        if (y > items.length-1) {
            not_done = false
        } else {
            trees_or_not = items[y].charAt(x)
            if (trees_or_not == "#") {
                trees += 1
            } else {
                not_trees += 1
            }
        }
    }
    return trees
}

console.log("A:", getTrees(3, 1))
console.log("B:", getTrees(1, 1)*getTrees(3, 1)*getTrees(5, 1)*getTrees(7, 1)*getTrees(1, 2))
