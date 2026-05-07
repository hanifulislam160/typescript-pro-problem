# Generics in TypeScript: Write Once, Use Everywhere — With Full Type Safety

> Generics aren't complicated. They're just functions and components that are flexible enough to work with any type — but still strict enough to catch your mistakes.

---

Imagine you're building a function that wraps a value in an object. Simple enough. But what type should the value be? A number? A string? A `User` object?

If you use `any`, you lose type safety. If you write one function per type, you're repeating yourself. **Generics solve both problems at once.**

---

## The problem Generics solve

```ts
// Without generics — you'd need to write this three times
function wrapString(value: string) { return { value }; }
function wrapNumber(value: number) { return { value }; }
function wrapUser(value: User)     { return { value }; }

// With generics — one function handles all of them
function wrap<T>(value: T): { value: T } {
  return { value };
}

wrap("hello");  // returns { value: string }
wrap(42);       // returns { value: number }
wrap(myUser);   // returns { value: User }
```

The `T` is a placeholder — a type variable. When you call the function, TypeScript fills it in automatically based on what you pass in. You get the flexibility of `any` without losing any of the type safety.

---

## A real-world example: API responses

Every API response has the same wrapper structure — a status, a message, and some data. But the data changes depending on what you're fetching. Generics are perfect here.

```ts
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

// TypeScript knows exactly what's inside `data`
const userResponse: ApiResponse<User> = {
  status: 200,
  message: "OK",
  data: { id: 1, name: "Rahim", email: "rahim@example.com" }
};

userResponse.data.name;  // ✅ autocomplete works perfectly
```

> **Generics are like a mold.** The mold's shape stays the same, but you can pour in any material — and you get a perfectly shaped result every time.

---

## You can also add constraints

What if you want `T` to be flexible, but not completely free? You can use `extends` to restrict it.

```ts
// T must have at least an `id` field
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Works with any object that has an id
getById(users, 1);      // ✅
getById(products, 5);   // ✅
getById(["a", "b"], 1); // ❌ strings have no id — TypeScript catches it
```

---

## Why this matters

Without generics, you either repeat yourself constantly or fall back to `any` and lose type safety. Generics let your code be both **flexible** and **precise**.

You write a function once, and TypeScript figures out the types at every call site.

**The takeaway:** whenever you notice yourself writing nearly identical functions for different types, that's generics calling your name.