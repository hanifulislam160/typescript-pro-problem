
// Problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return evenNumbers;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

