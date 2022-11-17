let fs = require('fs');

let input = process.argv.slice(2);

let inputArr = [];
for(let i=0; i<input.length; i++){
    inputArr.push(input[i]);
}
let ans = ""
for(let i=0; i<inputArr.length; i++){
      if( !fs.existsSync(inputArr[i])){
        console.log("bhai file nahee hai ")
        return;
      }
       ans += fs.readFileSync(inputArr[i]) +"\n";
}
console.log(ans);