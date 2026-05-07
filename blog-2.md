# How `Pick` and `Omit` Keep Your Code DRY

Instead of copy-pasting your interfaces and tweaking them, you can create focused types directly from a master interface using `Pick` and `Omit`.

Say you have this:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}
```

**`Pick`** — grab only the fields you need:

```ts
type UserPreview = Pick<User, "id" | "name">;
```

**`Omit`** — take everything except the fields you don't want:

```ts
type SafeUser = Omit<User, "password">; // safe
```

If you ever rename a field in `User`, TypeScript will warn you everywhere. No manual hunting through copies.

**Simple rule:** One master interface. Use `Pick` and `Omit` to slice it for specific use cases. Never duplicate.

