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

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an uppercase G or F
re = /[^GF]ray/i; // Must be anything except uppercase G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter and case
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} times
re = /Hel{2,4}o/i; // Must occur between {m,n} times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/; 

// Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric or _
re = /\w+/; // + equals one or more 
re = /\W/; // non-word characters 
re = /\d/; // will match any digit
re = /\d+/; // will match any digit 0 or more times
re = /\D/; // will match any non-digit
re = /\s/; // will match whitespace character
re = /\S/; // will match NON-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if followed by y

// String to match
const str = 'faljfasuxu';

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
