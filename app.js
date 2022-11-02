const num1 = 100;
const num2 = 50;
let val; //Initialize (no value set yet)

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // returns remainder

// Mtah Object

val = Math.PI;
val = Math.E;
val = Math.round(2.8); //round
val = Math.ceil(2.3); //round up
val = Math.floor(2.8); // round down
val = Math.sqrt(4);
val = Math.abs(-3); //positive value
val = Math.pow(8, 2); // first to power of second
val = Math.min(2, 33, 4, 1, 66, 6, 3, -2); // returns min number
val = Math.max(2, 33, 4, 1, 66, 6, 3, -2); // returns max number
val = Math.random(); //MDN: returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range

val = Math.floor(Math.random() * 20 + 1); // random number between 1 and 20

console.log(val);


