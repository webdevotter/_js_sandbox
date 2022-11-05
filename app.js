// // if(something) {
// //   do something
// // } else {
// //   do something else
// // }

const id = 100;

// // Equal To

// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not Equal to

// if(id != 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Equal to Value and Type

// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not equal to Value and Type

// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }


// Test if undefined

// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

//Greater or less than

// if(id >= 200){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

// const color = 'blue';

// if(color === 'red'){
//   console.log('Color is red');
// } else if (color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is neither');
// }

// Logical Operators

const firstName = 'Steve';
const age = 25;

// AND &&

if(age > 0 && age < 12){
  console.log(`${firstName} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${firstName} is a teenager`);
} else {
  console.log(`${firstName} is an adult`);
}

// OR ||

if(age < 16 || age > 65){
  console.log(`${firstName} cannot run in race`);
} else {
  console.log(`${firstName} is registered for the race`);
}

// Ternary Operator

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without Braces

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

