# The Four Pillars of OOP in TypeScript

### 1. Encapsulation
Hide internal data, expose only what's needed. Prevents outside code from breaking things accidentally.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) { this.balance += amount; }
  getBalance() { return this.balance; }
}
```

### 2. Inheritance
One class can extend another and reuse its logic without rewriting it.

```ts
class Animal {
  move() { console.log("moving"); }
}

class Dog extends Animal {
  bark() { console.log("woof"); }
}

const dog = new Dog();
dog.move(); // inherited
dog.bark();
```

### 3. Polymorphism
Same method name, different behavior depending on which class calls it.

```ts
class Cat extends Animal { speak() { console.log("Meow"); } }
class Duck extends Animal { speak() { console.log("Quack"); } }

const animals = [new Cat(), new Duck()];
animals.forEach(a => a.speak()); // each responds differently
```

### 4. Abstraction
Define *what* a class must do, without defining *how*. Forces every subclass to implement the required methods.

```ts
abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class Stripe extends PaymentProcessor {
  processPayment(amount: number) { console.log(`Stripe: $${amount}`); }
}
```

**In short:** Encapsulation guards data. Inheritance reuses logic. Polymorphism allows flexible behavior. Abstraction sets the contract.