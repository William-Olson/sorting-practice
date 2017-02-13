// const insertion = require('./insertionSort');

module.exports = function shell(arr)
{

   let interval = 1;
   let len = arr.length;

   while (interval <= len / 3) {
      interval = interval * 3 + 1;
   }

   while (interval > 0)
   {
      for (let outer = interval; outer < len; outer++) {
         let valueToInsert = arr[outer];
         let inner = outer;

         while (inner > interval -1 && arr[inner - interval] >= valueToInsert)
         {
            arr[inner] = arr[inner - interval];
            inner -=interval;
         }

         arr[inner] = valueToInsert;
      }

      interval = (interval -1) /3;
   }
   return arr;
};