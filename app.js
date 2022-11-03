// Create Arrays

const numbers = [81, 65, 70, 55, 30, 100, 99];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [2, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Array Length

val = numbers.length;


// Check if is array

val = Array.isArray(numbers);

// Get single value

val = numbers[3];
val = numbers[0];

//Insert into array
numbers[0] = 1000;

val = numbers[0];

// Find index of value

val = numbers.indexOf(9);

// Mutating arrays

//add to

numbers.push(250);

// add to front

numbers.unshift(120);

// Take off from end

numbers.pop();

// Take off from front

numbers.shift();

//Splice values

numbers.splice(0, 1); // start index and end index

// Reverse

numbers.reverse();

// Concatenate 

val = numbers.concat(fruit);

// Sort

val = fruit.sort();
val = numbers.sort();

// Use the "compare function"

val = numbers.sort(function(x, y){
  return x -y;
})

// Reverse sort
 
val = numbers.sort(function(x, y){
  return y -x;
})

// Find

function under50(num) {
   return num < 50;
}

val = numbers.find(under50);


console.log(val);
console.log(numbers);


