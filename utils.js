
module.exports = {

  /**
   * get a random integer between min and max values
   */
  getRandNumber(min, max)
  {
    return Math.floor(Math.random() * (max - min) + min);
  },

  /**
   * get a random integer array of length len
   */
  getRandArr(len)
  {
    len = len || this.getRandNumber(5, 10);
    const arr = [];

    while (len--) {
      arr.push(this.getRandNumber(0, 50));
    }

    return arr;
  }
};