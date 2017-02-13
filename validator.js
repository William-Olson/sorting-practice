const debug = require('debug')('validator');
const validSort = arr => [ ...arr ].sort((a, b) => a - b);

/**
 * Returns the excess numbers in s that are not in og
 */
function extra(og, s)
{
  const res = [];
  const count = (arr, item) => arr.filter(i => i === item).length;
  s.forEach(i => {
    if (count(og, i) < count(s, i) && !res.includes(i)) {
      let diff = count(s, i) - count(og, i);
      while (diff--) {
        res.push(i);
      }
    }
  });
  return res;
}

/**
 * Validation checks to run
 */
const checks = [
  {
    name: 'Length Check',
    msg: 'Result array has wrong length',
    valid: (og, s) => og.length === s.length,
    result: s => s.length,
    expected: og => og.length,
    note(og, s) {
        return og.length > s.length ?
          `Missing [ ${extra(s, og).join(', ')} ]` :
          `Extra [ ${extra(og, s).join(', ')} ]`;
    }
  },
  {
    name: 'Missing Items Check',
    msg: 'Missing items from original array',
    valid: (og, s) => og.every(o => s.includes(o)),
    result: s => s,
    expected: og => validSort(og),
    note: (og, s) => `Missing [ ${extra(s, og).join(', ')} ]`
  },
  {
    name: 'Sorted Check',
    msg: 'Result array not sorted',
    valid: (og, s) => [ ...og ].sort((a, b) => a - b).join() === s.join(),
    result: s => s,
    expected: og => validSort(og)
  }
];

module.exports = {

  /**
   * Run checks on sort results and return true if a failure occurs
   */
  fails(originalArr, sortedArr)
  {
    for (let check of checks) {
      if (!check.valid(originalArr, sortedArr)) {
        debug(`${check.name} Failure: `, check.msg);
        debug('Expected: ', check.expected(originalArr));
        debug('Recieved: ', check.result(sortedArr));
        if (check.note) {
          debug('Note: ', check.note(originalArr, sortedArr));
        }
        return true;
      }
    }
    debug('all checks passed!');
    return false;
  }

};
