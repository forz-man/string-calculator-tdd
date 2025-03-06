function add(numbers) {
if  (numbers === "") return 0;
let delimiters = /,|\n/;

 const customDelimiter = numbers.match(/^\/\/(\[.*\])\n/);
  if (customDelimiter) {
    const delimeterPart = customDelimiter[1]
    .slice(1, -1)
    .split("][")
    .map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
    .join("|");
    delimiters = new RegExp(delimeterPart); 
    numbers = numbers.split("\n")[1];
  } else if (numbers.startsWith("//")) {  
   const singleDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
   if (singleDelimiterMatch) {
     delimiters = new RegExp(singleDelimiterMatch[1]);
     numbers = numbers.split("\n")[1];    
  }
}

  const numArray =numbers
  .split(delimiters)
  .map(num => parseInt(num ,10 ))
  .filter(num => num <= 1000);


  const negative = numArray.filter(num => num < 0 );
  if (negative.length > 0){
    throw new Error (`negative numbers not allowed : ${negative.join(",")}`);
  }
return numArray.reduce((sum,num) => sum + num , 0);
} 
module.exports = add; 