const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.
const chars = [...new Set(
    expression.replaceAll(/[^a-f]/g, '').split('')
)];
const len = chars.length

function calculate(map) {
    let result = map.get(expression[0]);

    for (let i = 1; i < expression.length; i += 2) {
        const op = expression[i];
        const num = map.get(expression[i + 1]);

        if (op === '+') result += num;
        else if (op === '-') result -= num;
        else result *= num;
    }

    return result;
}

let max = -Infinity

function dfs(depth, arr) {
    if (depth === len) {
        const map = new Map()

        for (let i = 0; i < len; i++) {
            map.set(chars[i], arr[i])
        }

        max = Math.max(max, calculate(map))
        return;
    }

    for (let i = 1; i <= 4; i++) {
        dfs(depth + 1, [...arr, i])
    }
}

dfs(0, [])

console.log(max)