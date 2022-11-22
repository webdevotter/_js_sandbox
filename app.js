// const sayHello = () => {

//   const action = document.getElementById('action');
//   action.innerHTML = 'Hello';
// }

// One line function doesn't need braces

// const action = document.getElementById('action');
// const sayHello = () => action.innerHTML = 'Hello';


// Another way
// const sayHello = () => 'Hello';
// document.getElementById('action').innerHTML = sayHello();

// Return Object 
// const sayHello = () => ({msg: 'Hello'});
// document.getElementById('action').innerHTML = sayHello().msg;

// Single param does not need parenthesis
// const sayHello = firstName => `Hello, ${firstName}.`;

// document.getElementById('action').innerHTML = sayHello('Brad');

// Multiple param does need parenthesis
// const sayHello = (firstName , lastName) => `Hello, ${firstName} ${lastName}.`;

// document.getElementById('action').innerHTML = sayHello('Brad', 'Smith');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((firstName) => {
//   return firstName.length; 
// });

//Shortest
const nameLengths = users.map(firstName => firstName.length);


document.getElementById('action').innerHTML = nameLengths;