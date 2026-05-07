# Generics: Reusable Code That Stays Strictly Typed

Generics let you write a function or component once and use it with any data type — without losing type safety.

Without generics, you'd write the same function multiple times:

```ts

const wrapString = (value: string) => {
  return { value };
}
const wrapNumber = (value: string) => {
  return {value};
} 

```

With generics, one function handles everything:

```ts
const wrap = <T>(value: T): { value: T } => {
  return { value };
};

wrap("hello"); // value: string
wrap(42);      // value: number
```

`T` is just a placeholder. TypeScript fills it in automatically based on what you pass.

A common real-world use case is typing API responses:

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}

const res: ApiResponse<User> = { status: 200, data: currentUser };
res.data.name; 
```

**Simple rule:** If you're writing nearly the same function for different types, use a generic instead.