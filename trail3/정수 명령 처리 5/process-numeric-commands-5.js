const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

const arr = []
const answer = []

for (const c of commands) {
    const [command, val] = c.split(' ')
    if (command === 'push_back') {
        arr.push(val)
    } else if (command === 'pop_back') {
        arr.pop()
    } else if (command === 'size') {
        answer.push(arr.length)
    } else if (command === 'get') {
        answer.push(arr[val - 1])
    }
}

console.log(answer.join('\n'))