const add = require ("./function.js");  
test("empty string returns 0", () => {
  expect(add("")).toBe(0);
} );
