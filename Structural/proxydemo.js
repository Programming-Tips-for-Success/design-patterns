let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('New age value is not an integer');
        }
        if (value > 150) {
          throw new RangeError('New age value is too high');
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    }
  };
  
  const person = new Proxy({}, validator);
  
  person.age = 100;
  console.log(person.age); // 100
  person.age = 'young';    // Throws an exception
  person.age = 300;        // Throws an exception
  
//  node Structural/proxydemo.js
