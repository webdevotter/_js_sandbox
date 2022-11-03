const firstName = 'Larry';
const age = 39;
const job = 'Mortgage Banker';
const city = 'Cape Girardeau';
const pets = ['Maggie', 'Brady', 'Bear'];

let html;

// Without template strings (es5)

html = `<ul><li>Name: `+ firstName +` </li><li>Age: `+ age +`</li><li>Job: `+ job+`</li><li>City: `+ city +`</li></ul>`;

html =`<ul>` +
      `<li>Name: `+ firstName +` </li>` +
      `<li>Name: `+ age +` </li>` +
      `<li>Name: `+ job +` </li>` +
      `<li>Name: `+ city +` </li>`;
      '</ul>'


// With template strings (es6)


function hello() {
  return 'Hello,' + ' ' + firstName + '!';
}

html = `
<ul>
  <li>Name: ${firstName} </li>
  <li>Age:  ${age} </li>
  <li>Job: ${job} </li>
  <li>City: ${city} </li>
  <li>Pets: ${pets.length}</li>
  <li>Function: ${hello()} </li>
  <li>Age Is: ${age > 30 ? 'Over 30' : 'Under 30'} </li>
</ul>
`

document.body.innerHTML = html;


