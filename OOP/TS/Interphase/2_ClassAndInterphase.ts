// // using type keyword we can not implements it with class but interphase can. we also can implements multiple interphases

// interface Greetable {
//     name: string;
  
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