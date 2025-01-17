


//  3 options to create a new empty object:
var newObject = {};

var newObject2 = Object.create(Object.prototype);

var newObject3 = new Object();

// Four ways in which keys and values can then be assigned to an object:
// ECMAScript 3 compatible approaches

// 1. Dot syntax

// Set properties
// newObject.someKey = "Hello World";

// Get properties
// var value = newObject.someKey;



// 2. Square bracket syntax

// Set properties
newObject["someKey"] = "Hello World";

// Get properties
var value = newObject["someKey"];



// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/

// 3. Object.defineProperty



// Set properties
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true
});

let newPerson = {
  name: "Emily",
  age: 20,
};
// Object.freeze(person)
// Object.seal(person)
Object.defineProperty(newPerson, "job", {

  value: 3,

  writable: true,
  enumerable: true,
  configurable: true

});
newPerson.name = "Jack";
newPerson['job'] = "Developer";
console.log(newPerson, 'newPerson');

// If the above feels a little difficult to read, a short-hand could be written as follows:

var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};

// To use, we then create a new empty "person" object
var person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person, 'person');
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}




// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.

// These methods can also be used for inheritance

// Create a race car driver that inherits from the person object
var driver = Object.create(person);

// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property (1981)
console.log(driver.dateOfBirth);

// Get the property we set (100mph)
console.log(driver.topSpeed);



// node Creational/constructor.ts
