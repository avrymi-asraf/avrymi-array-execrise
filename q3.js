"use strict";

function firstOrSlice(arr, e = 1) {
  let result = arr.slice(0, e);
  console.log(result)
}

console.log('sorce -> 1,2,3,4,5')
firstOrSlice([1,2,3,4,5]);
console.log('sorce -> [1,2,3,4,5],3');
firstOrSlice([1,2,3,4,5] , 3)