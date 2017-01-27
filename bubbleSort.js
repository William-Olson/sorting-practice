


module.exports = function bubbleSort (arr) {

  const len = arr.length;

  for (let i = 0; i < len; i++) {

    let swapped = false;

    for (let j = len; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

  }
  return arr;
};
