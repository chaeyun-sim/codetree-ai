const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

const mergedArray = [];

function merge(arr, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            mergedArray[k++] = arr[i++];
        } else {
            mergedArray[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        mergedArray[k++] = arr[i++];
    }

    while (j <= right) {
        mergedArray[k++] = arr[j++];
    }

    for (let m = left; m <= right; m++) {
        arr[m] = mergedArray[m];
    }
}

mergeSort(arr, 0, n - 1);

console.log(arr.join(' '));