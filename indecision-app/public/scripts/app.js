'use strict';

var square = function square(x) {
  return x * x;
};

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(8));

// Getting first name using 'expanded' arrow function

// const getFirstName = (fullName) => { return fullName.split(' ')[0]; };

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

// Arguments object - no longer bound with arrrow functions
// it won't work with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

// this keyword - also no longer bound

var user = {
  name: 'Paul',
  cities: ['Norwich', 'Canterbury', 'Saigon', 'London'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  numbers: [5, 6, 2],
  multiplyBy: 5,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
