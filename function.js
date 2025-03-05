function add(numbers) {
if  (numbers === "") return 0;
const numbersArray = numbers.split(",").map(num => parseInt(num));
return numbersArray.reduce((sum, num) => sum + num , 0);

} 
module.exports = add; 