const square = function (x) {
  return x * x;
}; 

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// Getting first name using 'expanded' arrow function

// const getFirstName = (fullName) => { return fullName.split(' ')[0]; };

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

// Arguments object - no longer bound with arrrow functions
// it won't work with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// this keyword - also no longer bound

const user = {
  name: 'Paul',
  cities: ['Norwich', 'Canterbury', 'Saigon', 'London'],
  printPlacesLived: function () {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [5, 6, 2],
  multiplyBy: 5,
  multiply: function () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

