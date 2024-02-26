const analyzeArray = (arr) => {
  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const min = arr.length !== 0 ? Math.min(...arr) : undefined;
  const max = arr.length !== 0 ? Math.max(...arr) : undefined;
  const { length } = arr;
  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
