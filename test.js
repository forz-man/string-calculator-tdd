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

