const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports', 'saxophone'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    // return 2017 - person.age;
    return 2017 - this.age;
  }
}

let val;

val = person;

// Get specific value

val = person.firstName; //dot notation
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
]

people.push({name: 'Nancy', age: '45'})


for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}


