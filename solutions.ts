
// Problem 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return evenNumbers;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);


// Problem 2

const reverseString = (string: string) : string => {
  const reverseString = string.split('').reverse().join('');
  return reverseString;
};

reverseString("typescript");


// Problem 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): StringOrNumber => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

checkType("Hello");
checkType(42);




