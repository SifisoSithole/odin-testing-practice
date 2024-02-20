/* eslint-disable no-undef */
import capitalize from './capitalize';

test('capitalize function should capitalize the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('javascript')).toBe('Javascript');
});

test('capitalize function should return an empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize function should return the same string if the first letter is already capitalized', () => {
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('World')).toBe('World');
  expect(capitalize('Javascript')).toBe('Javascript');
});

test('capitalize function should return the same string if the first letter is not an alphabet', () => {
  expect(capitalize('1hello')).toBe('1hello');
  expect(capitalize('&world')).toBe('&world');
  expect(capitalize('#javascript')).toBe('#javascript');
});
