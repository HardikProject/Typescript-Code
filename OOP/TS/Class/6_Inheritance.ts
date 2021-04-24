// class Department {
//   // private readonly id: string;
//   // private name: string;
//   private employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   //ITDepartment get all the data of Department class
//   admins: string[]; // additinal variable
//   constructor(id: string, admins: string[]) {
//     //we using additinal constructor
//     super(id, "IT"); // we must write this after constructor bcoz it is invoking parent constructor first then inherited class constructor will invok
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const it = new ITDepartment("IT01", ["Max"]);

// it.addEmployee("Hardik");
// it.addEmployee("Yogesh");

// it.describe();
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("AC01", []);

// accounting.addReport("Something went wrong...");

// accounting.printReports();
// console.log("accounting:", accounting);
