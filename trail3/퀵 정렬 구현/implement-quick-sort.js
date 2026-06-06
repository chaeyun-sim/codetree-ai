const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

// Please Write your code here.

function quickSort(list) {
    if (list.length <= 1) return list;

    const pivot = list[0];
    const left = [];
    const right = [];

    for (let i = 1; i < list.length; i++) {
        if (list[i] <= pivot) left.push(list[i])
        else right.push(list[i])
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr).join(' '))