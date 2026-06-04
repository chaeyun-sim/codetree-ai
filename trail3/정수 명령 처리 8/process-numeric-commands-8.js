const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

const arr = []

for (const c of commands) {
    const [type, val] = c.split(' ')

    switch (type) {
        case 'push_front': arr.unshift(val); break;
        case 'push_back': arr.push(val); break;
        case 'pop_front': console.log(arr.shift(val)); break;
        case 'pop_back': console.log(arr.pop()); break;
        case 'size': console.log(arr.length); break;
        case 'empty': console.log(+!arr.length); break;
        case 'front': console.log(arr[0]); break;
        case 'back': console.log(arr.at(-1)); break;
    }
}