
module.exports = function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; arr[j] < arr[j - 1]; j--) {
      const tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;
    }
  }

  return arr;
};
