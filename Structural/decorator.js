// lets you  attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(" + _super.prototype.operation.call(this) + ")";
    };
    return ConcreteDecoratorA;
}(Decorator));
/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return "ConcreteDecoratorB(" + _super.prototype.operation.call(this) + ")";
    };
    return ConcreteDecoratorB;
}(Decorator));
/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component) {
    // ...
    console.log("RESULT: " + component.operation());
    // ...
}
/**
 * This way the client code can support both simple components...
 */
// const simple = new ConcreteComponent();
// console.log('Client: I\'ve got a simple component:');
// clientCode(simple);
// console.log('');
/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
// const decorator1 = new ConcreteDecoratorA(simple);
// const decorator2 = new ConcreteDecoratorB(decorator1);
// console.log('Client: Now I\'ve got a decorated component:');
// clientCode(decorator2);
// ==================
var logger = function (message) { return console.log(message); };
function loggerDecorator(logger) {
    return function (message) {
        logger.call(this, message);
        console.log("message logged at:", new Date().toLocaleString());
    };
}
var decoratedLogger = loggerDecorator(logger); // decorated the logger function by using the loggerDecorator
// logger("Lawrence logged in: logger") // returns Lawrence logged in: logger
// decoratedLogger("Lawrence logged in: decoratedLogger") 
// ========================
//ordinary multiply function
var Multiply = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a * b; });
};
// validated integers
var Validator = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var validArgs = args.every(function (arg) { return !isNaN(arg); });
        if (!validArgs) {
            throw new TypeError('Argument cannot be a non-integer');
        }
        return fn.apply(void 0, args);
    };
};
//decorated multiply function that only multiplies integers
// let MultiplyValidArgs = Validator(Multiply);
// logger(MultiplyValidArgs(1, 2, 3, 4, 5)) //returns 120
// =======================================
function log(target) {
    console.log("target is:", target);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        return new (target.bind.apply(target, __spreadArray([void 0], args)))();
    };
}
var Person = /** @class */ (function () {
    function Person(name, profession) {
    }
    Person = __decorate([
        log
    ], Person);
    return Person;
}());
var lawrence = new Person('Lawrence Eagles', "Developer");
console.log(lawrence);
// tsc Structural/decorator.ts && node Structural/decorator.js
