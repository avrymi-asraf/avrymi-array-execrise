"use strict";

function leapYears(startYear, endYear) {
  let result = [];

  for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
          if(year % 400 ===0){
              result.push(year);
          }
      } else {
        result.push(year);
      }
    }
  }
console.log( result);

}

console.log('sorce -> leapYears(2000, 2020)');
leapYears(2000, 2020)