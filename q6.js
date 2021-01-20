"use strict";
function dashesBetEven(num) {
  const strNum = String(num);
  console.log(typeof(strNum))
  console.log(strNum)
  let nowStrNum = '';
  for (let i = 0; i < strNum.length - 1; i++) {
    console.log(strNum[i])
    if (Number(strNum[i]) % 2 === 0 && Number(strNum[i + 1]) % 2 === 0) {
      console.log(strNum[i])
      nowStrNum += strNum[i];
      nowStrNum += "-";
    } else {
      nowStrNum += strNum[i];
    }
  }
  nowStrNum += strNum.slice(-1);
   console.log(nowStrNum);
}

console.log('sorce -> 24356458346')
dashesBetEven([24356458346])


