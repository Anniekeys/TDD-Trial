const { expect } = require("chai");
const should = require("chai").should();
const { multiply, divide, isOdd } = require("./app");

// For the multiplication function
describe("multiply", () => {
  // Test case for multiplying two positive numbers
  it("should multiply two positive numbers correctly", () => {
    expect(multiply(5, 2)).toBe(10);
  });

  // Test case for multiplying a positive number with zero
  it("should return zero when multiplying a positive number with zero", () => {
    expect(multiply(8, 0)).toBe(0);
  });

  // Test case for multiplying a negative number with zero
  it("should return zero when multiplying a positive number with zero", () => {
    expect(multiply(-8, 0)).toBe(0);
  });

  // Test case for multiplying a positive number with a negative number
  it("should multiply a positive number with a negative number correctly", () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  // Test case for multiplying two negative numbers
  it("should multiply two negative numbers correctly", () => {
    expect(multiply(-6, -3)).toBe(18);
  });

  // Test case for multiplying a positive number with a decimal number
  it("should multiply a positive number with a decimal number correctly", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// For the division function
describe("divide", () => {
  // Test case for dividing two positive numbers
  it("should divide two positive numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // Test case for dividing a positive number by zero
  it("should return Infinity when dividing a positive number by zero", () => {
    expect(divide(8, 0)).toBe(Infinity);
  });

  // Test case for dividing zero by a positive number
  it("should return 0 when dividing zero by a positive number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Test case for dividing zero by a negative number
  it("should return 0 when dividing zero by a positive number", () => {
    expect(divide(0, -5)).toBe(0);
  });

  // Test case for dividing a positive number by a negative number
  it("should divide a positive number by a negative number correctly", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  // Test case for dividing two negative numbers
  it("should divide two negative numbers correctly", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  // Test case for dividing a positive number by a decimal number
  it("should divide a positive number by a decimal number correctly", () => {
    expect(divide(10, 4.5)).toBeCloseTo(2.2222);
  });
});

// For the function that detects if the number is an odd number
describe("isOdd", () => {
  // Test case for an odd number
  it("should return true for an odd number", () => {
    expect(isOdd(7)).toBe(true);
  });

  // Test case for an even number
  it("should return false for an even number", () => {
    expect(isOdd(10)).toBe(false);
  });

  // Test case for zero
  it("should return false for zero", () => {
    expect(isOdd(0)).toBe(false);
  });

  // Test case for a negative odd number
  it("should return true for a negative odd number", () => {
    expect(isOdd(-5)).toBe(true);
  });

  // Test case for a negative even number
  it("should return false for a negative even number", () => {
    expect(isOdd(-8)).toBe(false);
  });

  // Test case for a decimal
  it("should return false for a decimal", () => {
    expect(isOdd(3.5)).toBe(false);
  });
});
