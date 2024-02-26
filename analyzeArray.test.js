/* eslint-disable no-undef */
import analyzeArray from './analyzeArray';

test('analyzeArray function should return the correct average, min, max, and length of an array', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(analyzeArray(arr1)).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });

  const arr2 = [10, 20, 30, 40, 50];
  expect(analyzeArray(arr2)).toEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5,
  });

  const arr3 = [5, 10, 15, 20];
  expect(analyzeArray(arr3)).toEqual({
    average: 12.5,
    min: 5,
    max: 20,
    length: 4,
  });
});

test('analyzeArray function should return correct results for arrays with negative numbers', () => {
  const arr = [-5, -10, -15, -20];
  expect(analyzeArray(arr)).toEqual({
    average: -12.5,
    min: -20,
    max: -5,
    length: 4,
  });
});

test('analyzeArray function should return correct results for arrays with duplicate numbers', () => {
  const arr = [1, 2, 2, 3, 3, 3];
  expect(analyzeArray(arr)).toEqual({
    average: 2.3333333333333335,
    min: 1,
    max: 3,
    length: 6,
  });
});

test('analyzeArray function should return correct results for empty arrays', () => {
  const arr = [];
  expect(analyzeArray(arr)).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
