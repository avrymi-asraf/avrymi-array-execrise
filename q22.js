//  document.getElementById("title").innerText = 'q22';

function unionFromTwo(arr1,arr2){
    let newArray = arr1.concat(arr2); 
    console.log(removeDup(newArray))
    // return removeDup(arr1)
}

let a = [2,4,6,8,10,11]
let b = [1,3,5,7,9,10]
console.log('[2,4,6,8,10,11] [1,3,5,7,9,10]')
unionFromTwo(a,b)


function removeDup(arr){
    const result = [];
    arr = sortArray(arr);
    for(let i =0; i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
    
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
