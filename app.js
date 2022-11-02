const firstName = 'Larry'
const lastName = 'Rhodes'
const age = 39;

let val;

val = firstName + lastName;

// Concatenation 

val = firstName +' '+ lastName;

// Append: add to, not replace

val = 'Brad ';
val += 'Traversy'

val = 'Hell, my name is ' + firstName + ' and I am ' + age;

// Escaping

val = 'That\'s awesome, I can\'t wait.';
val = "That's awesome, I can't wait."; // same as previous

// Length

val = firstName.length;
val = lastName.length;

// concat

val = firstName.concat(' ', lastName); // same as line 11

// Change case

val = firstName.toUpperCase();
val = lastName.toLowerCase();


val = firstName[1];

// indexOf()

val = firstName.indexOf('L');
val = firstName.lastIndexOf('y');

//charAt()

val = firstName.charAt('2');


console.log(val);


