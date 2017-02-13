/**
 * Merges two pre-sorted arrays and keeps ascending order
 */
function mergeAscending(arr1, arr2)
{
  let results = [];
  let i = 0, j = 0;

  // loop and insert until one array is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results = [ ...results, arr1[i] ];
      i++;
    }
    else {
      results = [ ...results, arr2[j] ];
      j++;
    }
  }

  // append leftovers
  results =  i < arr1.length ?
    [ ...results, ...arr1.slice(i, arr1.length) ] :
    [ ...results, ...arr2.slice(j, arr2.length) ];

  return results;
};

/**
 * Performs merge sort on an array
 */
module.exports = function merge(arr)
{
  // base case
  if (arr.length < 2) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex, arr.length);

  return mergeAscending(merge(left), merge(right));
};


