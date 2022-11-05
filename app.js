// FUNCTION DECLARATIONS

function greet(firstName = 'Betty', lastName = 'Boop'){
  // if(typeof firstName === 'undefined'){firstName = 'Betty'}
  // if(typeof lastName === 'undefined'){lastName = 'Boop'}
  // console.log('Hello');
  return 'Hello ' +firstName+ ' '+lastName;
}

// console.log(greet('Larry', 'Rhodes'));

//FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x * x;
}

// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran...');
// })();

// (function(firstName){
//   console.log('Hello ' + firstName);
// })('Brad');

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
      console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit(88);
todo.delete();


