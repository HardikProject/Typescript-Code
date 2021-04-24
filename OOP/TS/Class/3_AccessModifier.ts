// class Department {
//   public name: string; // bydefault it is public so we can access it everywhare
//   private employees:string[]=[];  // using private it will only access within class

//   constructor(name: string) {
//     this.name = name;
//   }

//   describe(this: Department) {
//     // it will allow us to only accessible by only object which contain Department pettern;
//     console.log("Your Department Is :- " + this.name);
//   }

//   addEmployee(employee:string){
//       this.employees.push(employee)
//   }

//   printDetails(){
//       console.log(this.employees.length)
//       console.log(this.employees)
//   }
// }

// const IT_Dept = new Department("IT Department");
// console.log("IT_Dept:", IT_Dept);

// IT_Dept.describe();

// IT_Dept.addEmployee('Hardik')
// IT_Dept.addEmployee('Yash')

// IT_Dept.employees[2] = 'Vishal'  // this will not work bcoz employees is private

// IT_Dept.printDetails();
