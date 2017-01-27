
const bubble = require('./bubbleSort');
const insert = require('./insertionSort');
const selection = require('./selectionSort');
const shell = require('./shellSort');

// run tests
const arr = [ 7, 3, 9, 5, 1 ];

// get a copy of arr
const getArray = () => arr.slice();

console.log('Bubble Sort...');
console.log('before', arr);
console.log('sorted:', bubble(getArray()), '\n');

console.log('Insertion Sort...');
console.log('before:', arr);
console.log('sorted:', insert(getArray()), '\n');

console.log('Selection Sort...');
console.log('before:', arr);
console.log('sorted:', selection(getArray()), '\n');


console.log('Shell Sort...');
console.log('before:', arr);
console.log('sorted:', shell(getArray()));