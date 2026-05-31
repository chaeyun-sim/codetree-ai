const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

const stack = []

for (const b of bracketStr.split('')) {
    if (b === '(') {
        stack.push('(')
    } else {
        if (stack.length === 0) {
            console.log('No');
            return;
        }
        stack.pop()
    }
}

console.log(stack.length ? 'No' : 'Yes')