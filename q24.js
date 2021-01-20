"use strict";

function removenalls(arr) {
  let result = [];
  for (let i in arr) {
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
//   return result
}

let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log('[NaN, 0, 15, false, -22, "", undefined, 47, null]')
removenalls(arr)