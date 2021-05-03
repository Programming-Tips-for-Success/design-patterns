// object literals can contain properties and methods.
// var myObjectLiteral = {

//     variableKey: variableValue,

//     functionKey: function () {
//       // ...
//     }
// };

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



// Outputs: Where in the world is Paul Irish today?

myModule.saySomething();



// Outputs: Caching is: enabled

myModule.reportMyConfig();



myModule.updateMyConfig({

    language: "fr",

    useCaching: false

});



// Outputs: Caching is: disabled

myModule.reportMyConfig();



// Another Example -
   
   var testModule = (function () {



    var counter = 0;



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



// Usage:



// Increment our counter

testModule.incrementCounter();



// Check the counter value and reset


testModule.resetCounter();

