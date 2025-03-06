function add(numbers) {
if  (numbers === "") return 0;
let delimiters = /,|\n/;

 const customDelimiter = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiter) {
    delimiters = new RegExp(customDelimiter[1]);
    numbers = numbers.split("\n")[1];
  }

  const numArray =numbers.split(delimiters).map(num => parseInt(num ,10 ));
  const negative = numArray.filter(num => num < 0 );
  if (negative.length > 0){
    throw new Error (`negative numbers not allowed : ${negative.join(",")}`);
  }
return numArray.reduce((sum,num) => sum + num , 0);
} 
module.exports = add; 