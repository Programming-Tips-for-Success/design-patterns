
// Module Pattern

// Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

// Object literals don't require instantiation using the new operator. Using object literals can assist in encapsulating and organizing your code. The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering. 

// Modules promote encapsulation, which means the variables and functions are kept private inside the module body and can't be overwritten.

// The Module pattern encapsulates "privacy", state and organization using closures.

// Module patterns, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone.

// it is used to wrap a set of variables and functions.
// The central principle of the Revealing Module pattern is that all functionality and variables should be hidden unless deliberately exposed
// code encapsulation can be achieved using Modules Patterns. In addition, it is used to create private and public properties
// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other.

// usage
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
var modularpattern = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;    
        }  
    }   
}());

console.log(modularpattern.add());    // alerts: 1
console.log(modularpattern.add());    // alerts: 2
console.log(modularpattern.reset());  // alerts: 0


// NEW E.G
// Creating a module in ES6 is quite simple.

// Addition module
// export const sum = (num1, num2) => num1 + num2;

// usage
// import { sum } from 'modules/sum';
// const result = sum(20, 30); // 50

// ES6 also allows us to export the module as default. 
// E.G

// All the variables and functions which are not exported are private within the module and cannot be used outside. Only the exported members are public and can be used by importing them.

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
 
// export the City class as default module
// export default City;

// usage
// import City from 'modules/city';
// const city = new City();
// city.getBusinessList();

// tsc module.ts 
// node module.js