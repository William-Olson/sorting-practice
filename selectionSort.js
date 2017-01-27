
const selectionSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let k = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }

    const tmp = arr[i];
    arr[i] = arr[k];
    arr[k] = tmp;
  }
  return arr;
};


module.exports = selectionSort;
