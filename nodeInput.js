let input = process.argv.slice(2);
console.log(input);
console.log(input[0] + " so what should we do");
/* [
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\Node\\wcat.js',
  'Here',
  'is',
  'the',
  'input'
]   // this is the output that we are going to get after running this command in the terminal.
// node wcat.js here is the input.
*/
let input2 = process.argv.slice(2); // this will remove the first two things that are getting printed.
// it will help us to get only the output that we want.
console.log(input2[0] + " so what should we do");