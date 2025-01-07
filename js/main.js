// const countProps = (obj) => Object.keys(obj).length;
// let user = {
//   name: "Volodumyr",
//   age: 16,
//   premium: true,
//   hobby: "sport",
// };

// user = { ...user, mood: "happy" };
// user = { ...user, hobby: "skydiving" };
// user = { ...user, premium: false };

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(`Кількість властивостей: ${countProps(user)}`);


//3

// const findBestEmployee = (employees) => {
//   let bestEmployee = null;
//     let maxTasks = 0;
    
//   for (const [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = name;
//     }
//   }

//     return bestEmployee;
    
// };

// const employees = {
//   Ann: 29,
//   David: 35,
//   Helen: 3,
//   John: 99,
// };
// console.log(`Найпродуктивніший співробітник: ${findBestEmployee(employees)}`);


//4

// const countTotalSalary = (employees) => {
//   let totalSalary = 0;

//   for (const entry of Object.entries(employees)) {
//     totalSalary += entry[1];
//   }

//   return totalSalary;
// };

// let salaries = {
//   Ann: 5000,
//   David: 7500,
//   Helen: 2000,
//   John: 10000,
// };

// salaries = { ...salaries, Helen: 25000 };

// console.log(`Сума зарплат: ${countTotalSalary(salaries)}`);


//5

// const getAllPropValues = (arr, prop) => {
//   const values = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       values.push(obj[prop]);
//     }
//   }

//   return values;
// };

// const products = [
//   { name: "Мишка", price: 1300, quantity: 4 },
//   { name: "Клавіатура", price: 4700, quantity: 3 },
//   { name: "Коврик для миші", price: 700, quantity: 7 },
//   { name: "Навушники", price: 1200, quantity: 2 },
// ];

// console.log(
//   `Значення name: ${getAllPropValues(products, "name")}`
// );
// console.log(
//   `Значення quantity: ${getAllPropValues(products, "quantity")}`
// );


//6

// const calculateTotalPrice = (allProducts, productName) => {
//   for (let i = 0; i < allProducts.length; i++) {
//       const { name, price, quantity } = allProducts[i];
      
//     if (name === productName) {
//       return price * quantity;
//     }
//   }
//   return 0;
// };

// const products = [
//   { name: 'Apple', price: 4, quantity: 5 },
//   { name: 'Banana', price: 7, quantity: 10 },
//   { name: 'Orange', price: 8, quantity: 7 },
// ];

// console.log(calculateTotalPrice(products, 'Apple'));
// console.log(calculateTotalPrice(products, 'Banana'));
// console.log(calculateTotalPrice(products, 'Orange'));
// console.log(calculateTotalPrice(products, 'Grapes'));


//7