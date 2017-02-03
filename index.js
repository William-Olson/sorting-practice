const fs = require('fs');
const dir = fs.readdirSync(__dirname);

// Define test data
const arr = [ 7, 3, 9, 5, 1 ]; // testing array
const getArray = () => arr.slice(); // get a copy of arr

function badSort(sortedArr)
{
  const expectedOutput = [ 1, 3, 5, 7, 9 ];
  return sortedArr.join() !== expectedOutput.join();
}


dir.forEach(file => {

  if (!file.endsWith('.js') || file === 'index.js') {
    return;
  }

  const sorter = require(`./${file}`);
  const result = sorter( getArray() );

  console.log(`Executing ${sorter.name} sort...`);
  console.log('before', arr);
  console.log('sorted:', result, '\n');

  if (badSort(result)) {
    console.error('Error: returned sorted array is not correct!!');
    process.exit(1);
  }

});

process.exit(0);
