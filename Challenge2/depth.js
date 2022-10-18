const fs = require('fs')

// Same this as last time, but splitting the strings into objects and returning that array.
function readFile(filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);
    let array = arr.map((string) => string.split(" ")).map(([direction, count]) => ({
        direction,
        count: parseInt(count, 10)
    }));

    return array;
}

let input = readFile('./Challenge2/input2.txt');
function calculatePosition(inputArr) {
    let depth = 0;
    let position = 0
    inputArr.forEach(({ direction, count }) => {
        switch (direction) {
            case 'forward':
                position += count;
                break;
            case 'down':
                depth += count;
                break;
            case 'up':
                depth -= count;
                break;

        }
    })
    console.log(depth, position);
    console.log(depth * position);
}
// calculatePosition(input);
// get our result
// console.log(input);
function calculatePosition2(inputArr) {
    let aim = 0
    let depth = 0;
    let position = 0
    inputArr.forEach(({ direction, count }) => {
        switch (direction) {
            case 'forward':
                position += count;
                depth += aim * count
                break;
            case 'down':
                aim += count;
                break;
            case 'up':
                aim -= count;
                break;

        }
    })
    console.log(depth, position);
    console.log(depth * position);
}
calculatePosition2(input);