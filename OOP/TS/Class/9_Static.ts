// // Static Method or property inside class help us to access it without making this object i.e Math.floor(2.6) we no make any object like const floor = new Math() then we use floor.floor(2.6) so Math is static one.

// class Department {
//   static Hello = "Hello Hardik";

//   constructor(public name: string) {
//     console.log(name + Department.Hello);
//   }

//   static movieDetail(movie:string){
//       return 'Your Movie ' + movie
//   }
// }

// const greeting = Department.Hello
// console.log('greeting:', greeting)

// const Movie = Department.movieDetail('Sacred Games')
// console.log('Movie:', Movie)