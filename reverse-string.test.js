/* eslint-disable no-undef */
import reverseString from './reverse-string';

test('reverseString function should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('javascript')).toBe('tpircsavaj');
});

test('reverseString function should return an empty string if input is empty', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString function should return the same string if it contains only one character', () => {
  expect(reverseString('a')).toBe('a');
  expect(reverseString('Z')).toBe('Z');
});

test('reverseString function should handle special characters and numbers', () => {
  expect(reverseString('1hello')).toBe('olleh1');
  expect(reverseString('&world')).toBe('dlrow&');
  expect(reverseString('#javascript')).toBe('tpircsavaj#');
});
