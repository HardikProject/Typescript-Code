// class Department {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   describe(this: Department) {
//     // it will allow us to only accessible by only object which contain Department pettern;
//     console.log("Your Department Is :- " + this.name);
//   }
// }

// const IT_Dept = new Department("IT Department");
// console.log("IT_Dept:", IT_Dept);

// IT_Dept.describe();

// const IT_COPY = { name: "DUMMy", describe: IT_Dept.describe };
// IT_COPY.describe();
