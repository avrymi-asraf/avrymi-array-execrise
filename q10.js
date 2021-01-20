"use strict";



function printElement(arr){
for(let i =0; i<arr.length; i++){
  console.log('row '+ i)
  for(let j =0; j<arr[i].length; j++){
    console.log(arr[i][j])
  }
}}

console.log('sorce-> a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];')
printElement ([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])