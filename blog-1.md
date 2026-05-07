# Stop Using `any`. Here's Why It's Quietly Breaking Your Code.

> A plain-English look at why `unknown` is the smarter, safer option — and what "type narrowing" actually means.

---

You're new to TypeScript. You hit an error. Someone says, "Just use `any` and move on." You do it. Problem solved — or so you think.

Here's the thing: `any` doesn't fix the problem. It just makes TypeScript stop complaining, and that silence is dangerous.

---

## What does `any` actually do?

When you type something as `any`, you're telling TypeScript: "Stop watching this. I'll handle it." TypeScript backs off completely. No type checks. No warnings. Nothing.

It's like turning off your fire alarm because you burnt your toast — sure, the noise stops, but now you won't know when there's a real fire.

```ts
// TypeScript says nothing. No warnings. No safety.
let data: any = fetchUserFromAPI();
data.toUpperCase();  // runs fine... until it crashes at runtime
data.someRandomThing.that.doesnt.exist;  // TypeScript shrugs 🤷
```

At runtime? Your app blows up. And since TypeScript said nothing, you have no idea where to look.

---

## Enter `unknown` — the safer sibling

`unknown` is like `any` in that it accepts any value. But unlike `any`, it forces you to **prove** what the value actually is before you use it. You can receive it, hold it — but you can't just do whatever you want with it.

```ts
let data: unknown = fetchUserFromAPI();

data.toUpperCase();  // ❌ TypeScript error — good!

// You must check first:
if (typeof data === "string") {
  data.toUpperCase();  // ✅ Now TypeScript is happy
}
```

> **Think of `unknown` as a mystery package.** You can accept the delivery, but you need to open and inspect it before you use what's inside. `any` skips the inspection entirely.

---

## So what is "type narrowing"?

Type narrowing is simply the act of checking a value's type before using it. You "narrow" a wide, vague type down to something specific and safe. You do it with `typeof`, `instanceof`, or custom checks.

```ts
function handleInput(value: unknown) {

  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's a string here
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));   // TypeScript knows it's a number here
  }
}
```

Each `if` block narrows the type. Inside the block, TypeScript knows exactly what it's dealing with — so it can help you with autocomplete, error detection, and more.

---

## The rule of thumb

When you don't know what type something will be — like data from an API, a user input, or a JSON file — use `unknown`. Then narrow it before you use it. Avoid `any` like a shortcut that leads off a cliff.

**In short:**
- `any` = TypeScript trusts you blindly.
- `unknown` = TypeScript makes you earn it.

Earn it.