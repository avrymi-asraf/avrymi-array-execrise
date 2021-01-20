

function isArray(arr){
    let result = (toString.call(arr)==='[object Array]')
    console.log(result);
}

const a = [2,3,4,5,5];
console.log('sorce -> [2,3,4,5,5]');
isArray([2,3,4,5,5]);
console.log('sorce -> 2');
isArray(2);
