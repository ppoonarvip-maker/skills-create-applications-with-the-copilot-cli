// calculator.test.js
// Comprehensive unit tests for calculator functions
// Uses Jest testing framework

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator', () => {
  describe('Addition', () => {
    test('adds two positive numbers', () => {
      expect(add(7, 3)).toBe(10);
    });
    test('adds negative numbers', () => {
      expect(add(-2, -5)).toBe(-7);
    });
    test('adds zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('Subtraction', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(7, 3)).toBe(4);
    });
    test('subtracts negative numbers', () => {
      expect(subtract(-2, -5)).toBe(3);
    });
    test('subtracts zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('Multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(7, 3)).toBe(21);
    });
    test('multiplies negative numbers', () => {
      expect(multiply(-2, -5)).toBe(10);
    });
    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('Division', () => {
    test('divides two positive numbers', () => {
      expect(divide(7, 3)).toBeCloseTo(2.333, 2);
    });
    test('divides negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });
    test('divides by one', () => {
      expect(divide(5, 1)).toBe(5);
    });
    test('division by zero throws error', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
  });
});
