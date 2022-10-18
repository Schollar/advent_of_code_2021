// Loop over the array and compare values
// Increment count if number is larger than previous
function larger(arr) {
    let count = 0
    for (i = 1; i < arr.length; i++) {
        if (Number(arr[i]) > Number(arr[i - 1])) {
            count += 1
        }
    }
    return count
}
// import so we can read the input file and convert it to an array
// Need to learn more about ES modules. This works but is getting mad at me
// There has been times at work with the same thing.
const { readFileSync, promises: fsPromises } = require('fs');

// Did have to lookup how this was done.
function readFile(filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

let input = readFile('./Challenge1/input.txt');

let result = larger(input);
// get our result
console.log(result)

// Now we need to get the sums with the 3 measurement sliding window. Gross.
function slidingWindowLarger(arr) {
    // Set count to 0
    let count = 0
    for (let i = 0; i < arr.length - 3; i++) {
        // Simply using i + x we can create our 3 measurment window
        let current = Number(arr[i]) + Number(arr[i + 1]) + Number(arr[i + 2]);
        // Same as above but one number larger to create the "next" 3 measurement window
        let next = Number(arr[i + 1]) + Number(arr[i + 2]) + Number(arr[i + 3]);
        // Increment count by 1 if the next window is larger than current window
        if (current < next) {
            count++;
        }
    }
    return count
}

let result2 = slidingWindowLarger(input);

console.log(result2);