const fs = require("fs");

const arr = fs
    .readFileSync("data.txt", { encoding: "utf-8" })
    .split("\n")

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

arr.forEach(command => {
    let commandArr = command.split(" ");
    switch (commandArr[0]) {
        case "up":
            aim -= parseInt(commandArr[1]);
            break;
        case "down":
            aim += parseInt(commandArr[1]);
            break;
        case "forward":
            horizontalPosition += parseInt(commandArr[1]);
            depth += aim * parseInt(commandArr[1]);
    }
});

console.log(horizontalPosition * depth);