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
