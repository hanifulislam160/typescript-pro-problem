
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

const checkType = (input: StringOrNumber): "String" | "Number" => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

checkType("Hello");
checkType(42);

// problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (book: Book): Book => {
  const updatedBook = {
    ...book,
    isRead: true,
  };

  return updatedBook;
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);



