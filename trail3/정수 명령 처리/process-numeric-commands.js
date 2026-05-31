const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

const arr = []
const answer = []

for (const c of commands) {
    const [type, val] = c.split(' ')

    switch (type) {
        case 'push':
            arr.push(Number(val))
            break;
        case 'pop':
            answer.push(arr.pop())
            break;
        case 'size':
            answer.push(arr.length)
            break;
        case 'empty':
            answer.push(arr.length ? 0 : 1)
            break;
        case 'top':
            answer.push(arr.at(-1))
    }
}

console.log(answer.join('\n'))