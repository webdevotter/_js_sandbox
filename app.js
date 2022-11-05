// // FOR LOOP

// for(let i = 0; i < 10; i++){
//   //console.log('Number: ' + i);
//   if(i === 2){
//     console.log( `${i} `+ 'is my favorite number');
//     continue;
//   }
//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }
//   console.log('Number: ' + i);
// }

//WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// Looping through arrays

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }


//For Each

// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP

// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const names = users.map(function(user){
//   return user.name;
// });

// console.log(names);


// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Age',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}





