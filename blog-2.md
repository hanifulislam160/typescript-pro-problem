# Stop Copy-Pasting Your Interfaces. Use `Pick` and `Omit`.

> How two simple TypeScript utility types keep your code DRY — and why that matters more than you think.

---

You've written a `User` interface. It's got everything: name, email, password, age, role, createdAt. Then you need a type for the profile page — same fields, but no password. So you copy the interface and delete the password field.

Done, right?

Wrong. Now you have two places to update every time something changes. That's a maintenance nightmare waiting to happen. This is exactly what **DRY — Don't Repeat Yourself** tries to prevent.

---

## Your master interface

Think of your full interface as the single source of truth. One place. Everything lives here.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
}
```

Now instead of copying this everywhere, you use `Pick` and `Omit` to create "slices" of it.

---

## `Pick` — take only what you need

`Pick` lets you grab a few specific fields from your interface. Like picking items off a menu — you only take what you want.

```ts
// Only id and name — for a dropdown list
type UserPreview = Pick<User, "id" | "name">;

// Only public-facing fields — for an API response
type PublicUser = Pick<User, "id" | "name" | "email" | "role">;
```

---

## `Omit` — exclude what you don't want

`Omit` is the opposite. You start with everything and remove a few fields. If you have a large interface and only want to hide one or two fields, `Omit` is the cleaner choice.

```ts
// Everything except the password — safe to send to the frontend
type SafeUser = Omit<User, "password">;

// No id or createdAt — for creating a new user
type NewUserInput = Omit<User, "id" | "createdAt">;
```

> **Both `Pick` and `Omit` stay connected to your original `User` interface.** If you rename a field in `User`, TypeScript will immediately warn you in every derived type. No hunting for copies.

---

## When to use which?

Use `Pick` when you want just a few fields from a large interface.
Use `Omit` when you want almost everything, just minus one or two.

The result is the same — a focused, specific type — but choosing the right one makes your intent clearer to other developers reading your code.

---

## The real payoff

Change your master interface once. All the derived types update automatically. You never worry about keeping copies in sync.

That's DRY in practice — less code, less maintenance, fewer bugs.

**Remember:** your full interface is the single source of truth. `Pick` and `Omit` are just lenses you look through it with.