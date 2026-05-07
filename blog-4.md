# The Four Pillars of OOP — Explained Like You're a Human, Not a Textbook

> Inheritance, Polymorphism, Abstraction, Encapsulation — what they actually mean and why they make large TypeScript projects survivable.

---

Object-oriented programming has four big ideas that show up in every interview, every design discussion, and every large codebase. The problem is most explanations are dry and abstract. Let's fix that.

---

## 1. Encapsulation — hide the messy stuff

Encapsulation means keeping the internal details of a class private, and only exposing what's necessary. Think of a car — you interact with a steering wheel and pedals. You don't need to know how the engine works internally.

```ts
class BankAccount {
  private balance: number = 0;  // hidden from outside

  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;  // controlled access only
  }
}

const account = new BankAccount();
account.balance = -9999;  // ❌ TypeScript error — can't touch private fields
account.deposit(100);      // ✅ use the safe interface
```

Nobody can mess with your balance directly. That's the point. Encapsulation protects your data from accidental or malicious changes.

---

## 2. Inheritance — build on what already exists

Inheritance lets one class borrow the features of another. Instead of rewriting shared logic, a child class extends the parent and adds its own special behavior on top.

```ts
class Animal {
  constructor(public name: string) {}
  move() { console.log(`${this.name} is moving`); }
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

const dog = new Dog("Rex");
dog.move();  // inherited from Animal
dog.bark();  // Dog's own method
```

In a large app, you might have a base `Component` or `BaseService` class with common logic — logging, error handling, authentication checks. Every specific class inherits that, so you write it once.

---

## 3. Polymorphism — same interface, different behavior

Polymorphism sounds scary, but it's simple: **the same method name can do different things depending on the object.** You call `.speak()` on anything — a Dog, a Cat, a Duck — and each one responds in its own way.

```ts
class Cat extends Animal {
  speak() { console.log("Meow"); }
}

class Duck extends Animal {
  speak() { console.log("Quack"); }
}

const animals: Animal[] = [new Cat("Kitty"), new Duck("Donald")];
animals.forEach(a => a.speak()); // each responds differently
```

> Polymorphism is what makes code extensible. You write one `forEach` loop, and it works for every animal you ever add later — without changing the loop.

---

## 4. Abstraction — show only what matters

Abstraction means defining **what** something should do, without worrying about **how** it does it. In TypeScript, you do this with abstract classes or interfaces. They act as contracts — a promise that any class implementing them will have certain methods.

```ts
abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;  // must be implemented

  logPayment(amount: number) {
    console.log(`Processing payment of $${amount}`);  // shared logic
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayment(amount: number) {
    this.logPayment(amount);
    console.log("Charging via Stripe...");
  }
}

class BkashProcessor extends PaymentProcessor {
  processPayment(amount: number) {
    this.logPayment(amount);
    console.log("Sending via bKash...");
  }
}
```

The rest of your app doesn't care whether you're using Stripe or bKash. It just calls `processPayment()`. That's abstraction — hiding the **how**, exposing only the **what**.

---

## How they work together

In a real project, these four pillars aren't separate choices — they work together.

- You **encapsulate** your data.
- You use **inheritance** to share logic.
- **Polymorphism** makes your shared interfaces flexible.
- **Abstraction** keeps your system decoupled so you can swap parts out without breaking everything.

**Simple version:**
| Pillar | What it means |
|---|---|
| Encapsulation | Guard your data |
| Inheritance | Reuse code |
| Polymorphism | Same call, different results |
| Abstraction | Agree on the "what", not the "how" |