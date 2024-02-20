/* eslint-disable no-undef */
import Calculator from './calculator';

test('add function should add two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 5)).toBe(4);
  expect(calculator.add(0, 0)).toBe(0);
});

test('subtract function should subtract two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(10, -3)).toBe(13);
  expect(calculator.subtract(0, 0)).toBe(0);
});

test('multiply function should multiply two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-4, 5)).toBe(-20);
  expect(calculator.multiply(0, 10)).toBe(0);
});

test('divide function should divide two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(-15, 3)).toBe(-5);
  expect(calculator.divide(0, 5)).toBe(0);
});

test('divide function should throw an error when dividing by zero', () => {
  const calculator = new Calculator();
  expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});
