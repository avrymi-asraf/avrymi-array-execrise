const input = document.getElementById("input").value;
const output = document.getElementById("output");
let arr = [];

function add() {
  arr.push(input);
}

function display() {
  output.innerText = arr;
}
