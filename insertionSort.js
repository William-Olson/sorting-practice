
module.exports = function insertion(arr)
{

  for (let i = 1; i < arr.length; i++) {

    // loop backwards swapping values with previous ones until insertion spot
    // is found and value is in the correct spot
    for (let j = i; arr[j] < arr[j - 1]; j--) {

      // swap prev with current
      const tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;
    }

  }

  return arr;
};





