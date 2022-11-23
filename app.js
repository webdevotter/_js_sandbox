const user = {email: 'jdoe@gmail.com'}

try {

  // Produce a reference error
  // myFunction();

  //Produce a TypeError
  // null.myFunction();

  // Will produce a SyntaxError
  // console.log(eval('2+2'));
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');
  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.name);
  // console.log(e.message);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');