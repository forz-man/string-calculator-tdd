# String Calculator (TDD Kata)

## Overview
This project follows a **Test-Driven Development (TDD)** approach to implement a simple string calculator. The calculator processes string inputs and returns numerical outputs based on a set of defined rules. My implementation was broken down into ten steps, each adding new functionality with corresponding tests.

---

## Steps & Thought Process

### **Step 1: Handle Empty String Input**
- **Test:** When an empty string is passed, return `0`.
- **Implementation:**
  ```javascript
  function add(numbers) {
    return numbers === "" ? 0 : parseInt(numbers);
  }
  ```
- **Commit Message:** `feat: handle empty string input`
- **Thought Process:** The simplest case must return `0`.

---

### **Step 2: Handle Single Number Input**
- **Test:** When a single number is passed as a string, return that number.
- **Implementation:** Already handled by `parseInt(numbers)`.
- **Commit Message:** `test: single number returns the number`
- **Thought Process:** The function should correctly return a single number.

---

### **Step 3: Handle Two Numbers Separated by a Comma**
- **Test:** When two numbers are passed as a comma-separated string, return their sum.
- **Implementation:**
  ```javascript
  function add(numbers) {
    if (numbers === "") return 0;
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  ```
- **Commit Message:** `feat: handle two numbers separated by a comma`
- **Thought Process:** Used `.split(",")` to handle two numbers and `.reduce()` to sum them.

---

### **Step 4: Handle More Than Two Numbers**
- **Test:** When multiple numbers are separated by commas, return their sum.
- **Implementation:** Already handled by `split(",").map(Number)`.
- **Commit Message:** `test: multiple numbers should return their sum`
- **Thought Process:** Extend the logic to sum multiple numbers.

---

### **Step 5: Handle Newline as a Delimiter**
- **Test:** Support `\n` (newline) as an alternative delimiter to `,`.
- **Implementation:**
  ```javascript
  function add(numbers) {
    if (numbers === "") return 0;
    const numArray = numbers.split(/,|\n/).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  ```
- **Commit Message:** `feat: support newline as a delimiter`
- **Thought Process:** Used regex `/,|\n/` to split by both `,` and `\n`.

---

### **Step 6: Handle Custom Delimiters**
- **Test:** Allow defining a custom delimiter in the format `//[delimiter]\n[numbers]`.
- **Implementation:**
  ```javascript
  function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  ```
- **Commit Message:** `feat: support custom delimiters`
- **Thought Process:** Extract delimiter from `//[delimiter]\n`, then use `RegExp()` for dynamic splitting.

---

### **Step 7: Handle Negative Numbers (Throw Error)**
- **Test:** If negative numbers are provided, throw an error listing them.
- **Implementation:**
  ```javascript
  function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  ```
- **Commit Message:** `feat: throw error for negative numbers`
- **Thought Process:** Filter negatives and throw an error listing them.

---

### **Step 8: Ignore Numbers Greater Than 1000**
- **Test:** Numbers greater than `1000` should be ignored in summation.
- **Implementation:**
  ```javascript
  const numArray = numbers.split(delimiter).map(Number).filter(n => n <= 1000);
  ```
- **Commit Message:** `feat: ignore numbers greater than 1000`
- **Thought Process:** Applied `.filter(n => n <= 1000)` before summing.

---

### **Step 9: Allow Multi-Character Delimiters**
- **Test:** Support delimiters longer than one character (e.g., `//[***]\n1***2***3`).
- **Implementation:**
  ```javascript
  if (numbers.startsWith("//[")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].match(/\[(.*?)\]/)[1]);
    numbers = parts[1];
  }
  ```
- **Commit Message:** `feat: support multi-character delimiters`
- **Thought Process:** Used regex `/\[(.*?)\]/` to extract multi-character delimiters.

---

### **Step 10: Support Multiple Custom Delimiters**
- **Test:** Support multiple custom delimiters in the format `//[delim1][delim2]\n[numbers]`.
- **Implementation:**
  ```javascript
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].match(/\[(.*?)\]/g).map(d => d.slice(1, -1)).join("|"));
    numbers = parts[1];
  }
  ```
- **Commit Message:** `feat: support multiple custom delimiters`
- **Thought Process:** Used `match(/\[(.*?)\]/g)` to extract multiple delimiters, then joined them with `|` for regex.

---

## Conclusion
This project followed **Test-Driven Development (TDD)** to incrementally build a robust string calculator. Each step introduced a new feature while ensuring previous tests remained valid.

- **Technologies Used:** JavaScript, Jest (for testing)
- **Development Approach:** TDD (Test-Driven Development)

### **Future Enhancements:**
- Add support for different number formats (e.g., decimals)
- Extend support for different delimiters dynamically

