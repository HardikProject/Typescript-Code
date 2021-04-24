// // we only can apply readonly keyword to interphase and after apply it we only set it once and then can access only.

// interface Greetable {
//     readonly name: string;
  
//     greet(phrase: string): void;
//   }
  
//   class Person implements Greetable {
//     name: string;
//     age = 30;
  
//     constructor(n: string) {
//       this.name = n;
//     }
  
//     greet(phrase: string) {
//       console.log(phrase + ' ' + this.name);
//     }
//   }
  
//   let user1: Greetable;
  
//   user1 = new Person('Hardik');
  
//   user1.greet('Hi there - I am');
//   console.log(user1);