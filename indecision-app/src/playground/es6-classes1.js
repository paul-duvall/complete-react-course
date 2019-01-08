
// Person class

class Person {
  constructor(name = 'No name', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello there ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    
    if(this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
    
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()){
      greeting += ` I am from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me = new Traveller('Paul Dee', 38, 'Norwich');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());