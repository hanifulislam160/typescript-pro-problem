
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


// Problem 6

class Person {
   name: string;
   age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
   grade: string;

    constructor (name:string, age:number, grade:string ){
      super(name, age)
       this.grade = grade;
    }
    

  getDetails() : string {
    const user = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    return  user;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();


// problem 7

const getIntersection = (value1: number[], value2: number[]) : number[] => {

    const match = value1.filter((number) => value2.includes(number));
    return match;

}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

