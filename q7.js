function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // Write a JavaScript program to sort the items of an array
  out = sortArray(input)

  /**/
  output.innerText = out;
}

function sortArray(arr) {
    let temp = 0;
  let tester;
  do {
    tester = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        tester = true;
      }
    }
  } while (tester);
  return arr
}

console.log(sortArray([5,-4,6,-1]))

let a = [6, -5, 4, -3, 2, 1];
let temp = 0;
console.log(a.length);
let tester;
do {
  tester = false;
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(i + 1);
    if (a[i] > a[i + 1]) {
      console.log(a);
      temp = a[i + 1];
      a[i + 1] = a[i];
      a[i] = temp;
      tester = true;
      console.log(a);
    }
  }
} while (tester);
