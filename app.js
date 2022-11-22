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
const sayHello = () => ({msg: 'Hello'});
document.getElementById('action').innerHTML = sayHello().msg;