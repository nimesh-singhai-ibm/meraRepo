// //console.log('nimesh singhai');
// //let x = null;
// //console.log(typeof x);
// //console.log('THIS IS always INCORRECT');
// //alert("ALERT");
// //console.exception('ye to exception hai');
// //console.error("ye to bada error hai");
// //console.warn('ye to warning hai');
// //let z = '10.2';
// //console.log(typeof z);
// //console.error('ye to error hai');

// //Concatenation
// /*const name = 'Nimesh';
// const age = 22;
// console.log('My name is ' + name +' and I am ' + age);
// console.log(`mera naame hai ${name} aur main hoon ${age}`);*/

// /*const s = 'Hello World';
// console.log (s.length);
// console.log(s.toUpperCase());   
// console.log(s.toLowerCase());
// console.log(s.split(''));*/

// //Arrays
// /*const tools = ['mongo', 'postman', 'jenkins', 2.0, 'javascript'];
// console.log(tools[2]);
// tools.push('UML');
// tools.unshift('API');
// tools.pop();
// console.log(tools);
// console.log(Array.isArray(tools));
// console.log(tools.indexOf('mongo'));*/

// /*const person = {
//     firstName: 'Nimesh',
//     lastName: 'Singhai',
//     Age: 22,
//     hobbies: ['sleep', 'read', 'movies'],
//     Address: {
//         HouseNo: '76 Paramount',
//         Street: 'Beckhampton Street',
//         City: 'Swindon',
//         PostalCode: 'SN12SE'
//             }
// }
// console.log (person);
// console.log(person.hobbies[1]);
// console.log(person.Address.City);*/

// const todos = [
//     {
//         id: 1,
//         task: 'clock ILC',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         task: 'clock PPM',
//         isCompleted: false
//     },
//     {
//         id: 3,
//         task: 'complete training',
//         isCompleted: false
//     }
// ];
// /*console.log(todos);
// const jsontodos = JSON.stringify(todos);
// console.log(jsontodos);*/

// //For
// /*
// for (let i=0; i<=10; i++)
// {
//     console.log(`Ye hai loop number ${i}`);
// }*/

// //While Loop
// /*let i = 1;
// while (i < 11)
// {
//     console.log (`ye while loop number ${i} hai`);
//     i++
// };*/

// /*for (let i=0; i<todos.length; i++)
// {
//     console.log(todos[i].task);
// }*/

// /*let i=0;
// while (i < todos.length)
// {
//     console.log(todos[i].task);
//     i++;
// }*/
// /*for (let todo of todos)
// {
//     console.log(todo.task);
// }*/

// //FOREACH, MAP, FILTER
// /*todos.forEach(function(todo)
// {
//     console.log(todo.task);
// });*/

// //MAP
// /*const todotask = todos.map(function(todo)
// {
//     return todo.task;
// });
// console.log(todotask);*/

// //FILTER
// /*const todoisCompleted = todos.filter(function(todo)
// {
//     return todo.isCompleted === true;
    
// });
// console.log(todoisCompleted);*/

// //Filter+MAP
// /*const todoisCompleted = todos.filter(function(todo)
// {
//     return todo.isCompleted === false;
// }).map(function(todo)
// {
//     return todo.task;
// })
// console.log(todoisCompleted);*/

// //CONDITIONAL Operator
// /*let x = 5;
// if (x === 10)
// {
//     console.log('The value of x matches');
// }
// else if (x>10)
// {
//     console.log('x is greater then 10');
// }
// else {
//     console.log('x is lesser then 10');
// }
// */

// //Functions
// /*const numadd = (num1, num2) => num1 + num2;
// console.log(numadd(8,3));*/

// /*function Person(firstName, lastName, dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//  }*/

// /*Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// };
// Person.prototype.getBirthYear = function(){
//     return dob.getFullYear();
// };*/

// //Instantiate Object
// /*const person1 = new Person('John', 'Doe', '04-Feb-1980');
// const person2 = new Person('Nimesh', 'Singhai', '04-Sep-1980');
// console.log(person2.getFullName());*/

// //Class
// /*class Person
// {
//     constructor (firstName, lastName, dob)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getFullName()
//     {
//         return `Full Name is ${this.firstName} ${this.lastName}`;
//     }
//     getBirthYear()
//     {
//         return this.dob.getFullYear();
//      }

// };

// //Instantiate Object
// const person1 = new Person('John', 'Doe', '04-Feb-1980');
// const person2 = new Person('Nimesh', 'Singhai', '04-Sep-1980');

// console.log(person2.getFullName());
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());*/

// console.log('Hello world');

console.log(`My name`);