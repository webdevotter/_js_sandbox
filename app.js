let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

//exec() - Return Result in an Array or Null
// const result = re.exec('hello world');

// console.log(result);

// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns the index of the first match, if not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);


// replace() - Return a new string with some or all matches of a pattern
const str = 'Hello There';
const newString = str.replace(re, 'Hi');
console.log(newString);
