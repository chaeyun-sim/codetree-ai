const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

const dequeue = []
const answer = []

for (const c of commands) {
    const [type, val] = c.split(' ')

    if (type === 'push_front') {
        dequeue.unshift(val)
    } else if (type === 'push_back') {
        dequeue.push(val)
    } else if (type === 'pop_front') {
        answer.push(dequeue.shift())
    } else if (type === 'pop_back') {
        answer.push(dequeue.pop())
    } else if (type === 'size') {
        answer.push(dequeue.length)
    } else if (type === 'empty') {
        answer.push(+!dequeue.length)
    } else if (type === 'front') {
        answer.push(dequeue[0])
    } else if (type === 'back') {
        answer.push(dequeue[dequeue.length - 1])
    }
}

console.log(answer.join('\n'))