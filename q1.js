function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    out = isArray(input)

/**/
    output.innerText = out;
}


function isArray(aar){
    return toString.call(arr)==='[ocject Array]'
}

const a = [2,3,4,5,5]
console.log(toString.call(a))