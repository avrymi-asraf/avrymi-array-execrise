"use strict";

console.log('sorce ->  3,3,3,4,6,8,5,47,6')
removeDup([3,3,3,4,6,8,5,47,6])




 function removeDup(arr){
    const result = [];
    arr = sortArray(arr);
    for(let i =0; i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            result.push(arr[i]);
        }
    }
    console.log(result);
    
 }


 function sortArray(arr) {
    let temp = 0;
  let isNotSort;
  do {
    isNotSort = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        isNotSort = true;
      }
    }
  } while (isNotSort);
  return arr
}
