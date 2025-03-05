const add = require ("./function.js");  
test("empty string returns 0", () => {
  expect(add("")).toBe(0);
} );
test("single number returns the number", () => {
  expect(add("1")).toBe(1); 
  expect(add("5")).toBe(5);
} );
test("two numbers depersted by comma returns thier sum", () => {
  expect(add("1,2")).toBe(3);
  expect(add("1,5")).toBe(6);
} );
test("multiple numbers  seperated by comma returns thier sum", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,5,7")).toBe(13);
} );
test("numbers separated by new line and commas return thier sum ", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("1\n5,7")).toBe(13);
  expect(add("1\n5\n7")).toBe(13);
} );
test("support different delimiters defined in input", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//;\n1;2;3")).toBe(6);
  expect(add("//;\n1;2;3;4")).toBe(10);
} );
