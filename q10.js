function run() {
  let input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // write your coe here
  out = printElement(input)

  /**/
  output.innerText = out;
}




function printElement(arr){
for(let i =0; i<arr.length; i++){
  console.log('row '+ i)
  for(let j =0; j<arr[i].length; j++){
    console.log(arr[i][j])
  }
}}