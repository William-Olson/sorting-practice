const fs = require('fs');
const debug = require('debug')('runner');

const sorterDir = fs.readdirSync(`${__dirname}/sorters`);
const utils = require('./utils');
const validation = require('./validator');

/**
 * Runs each file in the sorters directory with random number arrays
 */
for (let file of sorterDir) {

  if (!file.endsWith('.js')) {
    return;
  }

  // bring in the sorter and create an array to test
  const sorter = require(`./sorters/${file}`);
  const original = utils.getRandArr(10);
  const arr = original.slice();

  console.log('\n------------------------------------\n');
  debug(`Executing ${sorter.name} sort...`);
  console.log();

  // clock the sorter
  console.time(`\t ${sorter.name} exec time`);
  const result = sorter(arr);
  console.timeEnd(`\t ${sorter.name} exec time`);
  console.log();

  debug('original:', original);
  debug('sorted:', result);
  console.log();

  // run tests on results
  if (validation.fails(original, result)) {
    console.error('Error: Validation Error!!');
    process.exit(1);
  }
}

process.exit(0);
