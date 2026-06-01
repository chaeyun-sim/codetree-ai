const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

const queue = []
const answer = []

for (const c of commands) {
    const [type, val] = c.split(' ')

    if (type === 'push') {
        queue.push(val)
    } else if (type === 'pop') {
        answer.push(queue.shift())
    } else if (type === 'size') {
        answer.push(queue.length)
    } else if (type === 'empty') {
        answer.push(+!queue.length)
    } else if (type === 'front') {
        answer.push(queue[0])
    }
}

console.log(answer.join('\n'))