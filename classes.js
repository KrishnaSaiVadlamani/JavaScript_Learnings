class Person {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      return `Hello, I'm ${this.name}!`;
    }
  }
  
  const p = new Person("Krishna");
  console.log(p.sayHello());