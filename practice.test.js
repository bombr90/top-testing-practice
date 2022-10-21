import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./practice.js";

// Capitalize String Tests
test("capitalize string (1)", () => {
  expect(capitalize('test1')).toBe('Test1');
});

test("capitalize string (2)", () => {
  expect(capitalize("TEST2")).toBe("Test2");
});

test("capitalize string (3)", () => {
  expect(capitalize("Test3")).toBe("Test3");
});

// Reverse String Tests
test("reverse string (1)", () => {
  expect(reverseString('Test1')).toBe('1tseT');
})

test("reverse string (2)", () => {
  expect(reverseString("Test 2")).toBe("2 tseT");
});

// Calculator Tests
test("Calculator functions with valid numbers (1)", () => {
  expect(calculator(1,2).add()).toBe(3);
  expect(calculator(1, 2).sub()).toBe(-1);
  expect(calculator(1, 2).mult()).toBe(2);
  expect(calculator(1, 2).div()).toBe(0.5);
});

test("Calculator functions with invalid input (2)", () => {
  expect(calculator("a", 2).add()).toBe("Invalid input");
  expect(calculator(1, "b").add()).toBe("Invalid input");
});

test("Calculator division to infinity (3)", () => {
  expect(calculator(1,0).div()).toBe("Infinity");
  expect(calculator(0,1).div()).toBe(0);
});

// CeasarCipher Tests
test("CeasarCipher forward shift of 3 (1)", () => {
  expect(ceasarCipher("ABCDEF", 3)).toBe("DEFGHI");
});

test("CeasarCipher overflow shift of -3 (2)", () => {
  expect(ceasarCipher("ABCDEF", -3)).toBe("XYZABC");
});

test("CeasarCipher case shift of 3 (1)", () => {
  expect(ceasarCipher("AbCdEf", 3)).toBe("DeFgHi");
});

test("CeasarCipher punctuation shift of 3 (1)", () => {
  expect(ceasarCipher("ABC,DEF.", 3)).toBe("DEF,GHI.");
});

// analyzeArray Tests
test("analyzeArray test array (1)", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
    average: 4, 
    min: 1, 
    max: 8, 
    length: 6
  })
});