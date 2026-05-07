# Why `any` is a Type Safety Hole (And Why You Should Use `unknown` Instead)

When you use `any`, you're telling TypeScript to stop checking that variable. It accepts anything and never complains — even when something is clearly wrong.

```ts
let data: any = getFromAPI();
data.toUpperCase(); // no error, until it crashes at runtime
```

`unknown` is the safer version. It also accepts any value, but forces you to check the type before using it.

```ts
let data: unknown = getFromAPI();

if (typeof data === "string") {
  data.toUpperCase(); // it's safe now
}
```

That checking process is called **type narrowing** , you narrow down an unknown type to something specific before using it.

**Simple rule:** Use `unknown` when you don't know the type upfront (like API responses). Avoid `any` unless you have a very good reason.
