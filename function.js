function add(numbers) {
if  (numbers === "") return 0;
let delimiters = /,|\n/;
 const customDelimiter = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiter) {
    delimiters = new RegExp(customDelimiter[1]);
    numbers = numbers.split("\n")[1];
  }
return numbers
.split(delimiters)
.map(num => parseInt(num ,10))
.reduce((sum, num) => sum + num ,0);

} 
module.exports = add; 