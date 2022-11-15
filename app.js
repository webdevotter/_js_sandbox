class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return `Hello ${this.firstName} ${this.lastName}. Congratulations, you are ${age} years old today!`;
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}


const mary = new Person('Mary', 'Williams', '11-13-1980');
mary.getsMarried('Thompson');

console.log(mary.calculateAge());

console.log(Person.addNumbers(1, 2));