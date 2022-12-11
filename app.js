let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// MetaCharacter Symbols
re = /^h/i;  // Must start with 
re = / world$/i;  // Must end with 
re = /^hello$/i;  // Must start and end with
re = /h.llo/i;  // Must match any ONE character
re = /h*llo/i;  // Must match any character zero or more times
re = /gre?a?y/i;  // Must match any character zero or more times - optional characters
re = /gre?a?y\?/i;  // Escape character

// String to match
const str = 'gray';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
