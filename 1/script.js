const fs = require("fs");

const arr = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

// Part 1
let count = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    count++;
  }
}

console.log(count);

// Part 2
let count2 = 0;

for (let i = 3; i < arr.length; i++) {
  let currentRow = arr[i] + arr[i - 1] + arr[i - 2];
  let lastRow = arr[i - 1] + arr[i - 2] + arr[i - 3];
  if (currentRow > lastRow) {
    count2++;
  }
}

console.log(count2);