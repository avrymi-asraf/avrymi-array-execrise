function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // write your code here
  out = firstOrSlice(input);

  /**/
  output.innerText = out;
}


function firstOrSlice(arr, e = 1) {
  return arr.slice(0, e);
}


