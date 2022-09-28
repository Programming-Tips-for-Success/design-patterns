
var myModule = {
    myProperty: "someValue",
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },
    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?");
    },
    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },
    // override the current configuration
    updateMyConfig: function (newConfig) {
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
        }
    }
};

myModule.saySomething(); // Outputs: Where in the world is Paul Irish today?
myModule.reportMyConfig(); // Outputs: Caching is: enabled
myModule.updateMyConfig({
    language: "fr",
    useCaching: false
});
myModule.reportMyConfig(); // Outputs: Caching is: disabled

// Example -
var testModule = (function () {
    // private
    var counter = 0;
    // public
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
            console.log("counter value after reset: " + counter);
        }
    };
})();

// Increment our counter
testModule.incrementCounter();
// Check the counter value and reset
testModule.resetCounter();


// example
var modularpattern = (function () {
    // your module code goes here
    var sum = 0;

    return {
        add: function () {
            sum = sum + 1;
            return sum;
        },
        reset: function () {
            return sum = 0;
        }
    }
}());

console.log(modularpattern.add());    // alerts: 1
console.log(modularpattern.add());    // alerts: 2
console.log(modularpattern.reset());  // alerts: 0


// example
const sum = (num1, num2) => num1 + num2;
const result = sum(20, 30); // 50
console.log(result);

// example
// Here the businessList is private member to city module
const businessList = new WeakMap();

// Here City uses the businessList member as it’s in same module
class City {
    constructor() {
        businessList.set(this, ['Pizza Hut', 'Dominos', 'Street Pizza']);
    }

    // public method to access the private ‘businessList’
    getBusinessList() {
        return businessList.get(this);
    }

    // public method to add business to ‘businessList’
    addBusiness(business) {
        businessList.get(this).push(business);
    }
}
const city = new City();
const li = city.getBusinessList();
console.log(li);

// example

const globalData = {
    x: 20
  };
  const myModule2 = (function(global) { // <- access injections
    // private stuff in the module
    const val = 10 + global.x;
    // expose what you want
    return {
      prop: 12,
      method() {
        return val;
      }
    }
  })(globalData); // <- inject into your module
  console.log(myModule2.prop); // prints 12
  console.log(myModule2.method()); // prints 30

  // node module.ts  