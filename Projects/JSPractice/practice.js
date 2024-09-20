// let employees = ['John', 'Sarah', 'Eric'];

// console.log(employees);

// //Promlem 1.
// employees.push("Jimmy");

// console.log(employees);

// //Problem 2
// employees.pop();
// console.log(employees);

// //Problem 3
// employees.unshift("Lance");
// console.log(employees);

// //Problem 4
// employees.shift();
// console.log(employees);

// //Problem 5
// let sarahIndex = employees.indexOf('Sarah');
// console.log(sarahIndex);

//Ticket 2 Problem 1
let salaries = [35000, 45000, 55000, 70000, 90000];

// let highSalaries = salaries.filter((highSalary) => highSalary >= 50000);
// console.log(highSalaries);

// let squareSalaries = salaries.map((sS) => Math.pow(sS, 2));
// console.log(squareSalaries);

// //first salary that is over 65000
// let firstHighSalary = salaries.find((fHS) => fHS > 60000);
// console.log(firstHighSalary);

// Initial value of the accumulator is 0 console.log(totalSalary);

// let sales = [100, 200, 150, 300, 400];

// let salesSum = sales.reduce((accumulator, currentSalary) => accumulator + currentSalary, 0);
// console.log(salesSum);

// let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
// departments.forEach((department) => console.log(department));

// //Ticket 3
// let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
// // inventory.slice((0, 3) =>  console.log()));

// let slicedInventory = inventory.slice(0, 3);
// // console.log(slicedInventory);

// inventory.splice(2, 2);
// console.log(inventory);

// inventory.splice(3, 0, "another Keyboard", "remote", "medication")
// console.log(inventory);

// let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
// let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];

// let combinedEquipment= officeEquipment1.concat(officeEquipment2);
// console.log(combinedEquipment);

// let sales = [500, 1000, 750, 2000, 1250];
// let sortedSales = sales.sort((a, b) => b-a);
// console.log(sortedSales);

// let employee = {
// 	firstName: "",
// 	lastName: "",
// 	position: "",
// 	salary: 0,
// };

// employee.firstName = "John";
// employee.lastName = "Doe";
// employee.position = "Software Engineer";
// employee.salary = 80000;

// // console.log(employee);

// employee.hireDate = "";
// // console.log(employee);

// delete employee.salary;
// // console.log(employee);


// // for (let key in employee) {
// // 	if (employee.hasOwnProperty(key)) {
// // 		console.log(`${key}: ${employee[key]}`);
// // 	}
// // }
// for (property in employee) {
//     console.log(property, ": ",  employee[property]);
// }

let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

//create new array with only names of projects

let projectNames = projects.map((project) => {
    return project.projectName;
});

// console.log(projectNames);


// let evenNumbers = numbers.filter(number => number % 2 === 0); console.log(evenNumbers);

let projectsInProgress = projects.filter(project => project.status === 'in progress');
console.log(projectsInProgress);

projects.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
console.log(projects);