
let arr = [];

function add() {
  const a = document.getElementById("input").value;
  arr.push(a);
  document.getElementById("input").value = "";
  console.log(arr);
}

function display() {
  let result = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    result += `<li>Element ${i} = ${arr[i]} </li>`;
  }
  result += "</ul>";
  console.log(result);
  document.getElementById("output").innerHTML = result;
}
