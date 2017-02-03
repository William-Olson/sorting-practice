
module.exports = function insertionOptimized(arr)
{
  for (let i = 1; i < arr.length; i++) {

    // save arr[i] because it gets clobbered in inner loop
    // declare j here so we can use it outside of inner loop
    const toSwap = arr[i];
    let j = i;

    // loop from toSwap backwards until we find our insertion spot
    // and shift the values to the right along the way
    for (; toSwap < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }

    // now we can just pop the toSwap value into the newly found insertion spot
    arr[j] = toSwap;
  }

  return arr;
};



