function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // write your code here
  out = dashesBetEven(input)
  /**/
  output.innerText = out;
}

function dashesBetEven(num) {
  const strNum = String(num);
  let nowStrNum = '';
  for (let i = 0; i < strNum.length - 1; i++) {
    if (Number(strNum[i]) % 2 === 0 && Number(strNum[i + 1]) % 2 === 0) {
      nowStrNum += strNum[i];
      nowStrNum += "-";
    } else {
      nowStrNum += strNum[i];
    }
  }
  nowStrNum += strNum.slice(-1);
  return nowStrNum;
}



