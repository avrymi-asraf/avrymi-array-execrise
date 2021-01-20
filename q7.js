

function sortArray(arr) {
    let temp = 0;
  let notSort=false;
  do {
    notSort = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        notSort = true;
      }
    }
  } while (notSort);
  console.log(arr)
}
const a = [12,3,-1,22,-100,34,2]
console.log('sorce ->[12,3,-1,22,-100,34,2]')
sortArray(a)
