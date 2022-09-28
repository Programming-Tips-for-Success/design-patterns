// overview
// function

// simple iterator that takes a 
// function to get the next value
// which is called on every iteration
// and completes if the function
// returns null
function Iterator(getNextValue) {
    this.next = () => {
      const value = getNextValue();
      
      if(value === null) {
        return {done: true};
      }
      
      return {value, done: false};
    };
    
    this[Symbol.iterator] = function() { return this; }
  }

  const thousandList = {};
// using generator to implement an iterator
thousandList[Symbol.iterator] = function* () {
    let number = 0;
    yield number;
    while(number < 1000) {
      yield ++number;
    }
};
for(const number of thousandList) {
  console.log(number); // prints 1 to 1000
}
[...thousandList] // [1, 2, 3, ..., 1000]

// node Behavioural/iteratordemo.js
