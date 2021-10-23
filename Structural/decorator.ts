// Decorating in programming is simply wrapping one piece of code with another, thereby decorating it.
// Decorators enable us to write cleaner code by providing an efficient and understandable way of wrapping one piece of code with another. 
// It also provides a clean syntax for applying this wrapper.
// It lets you  attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
// decorators are a tool for reusing common logic. They are complementary to Object-Oriented Programming. 
// Decorators encapsulate responsibility shared by different objects. 
// Decorators let programmers modify and/or tag methods, classes, properties and parameters. 

// Two types-
// Function decorators
// take a function as an argument and return a new function that enhances the function argument without modifying it.

// Class Decorators
// A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition

 
 

/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
 interface Component {
    operation(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public operation(): string {
        return this.component.operation();
    }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreteDecoratorA extends Decorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

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

const logger = (message) => console.log(message)

function loggerDecorator (logger) {
    return function (message) {
        logger.call(this, message)
        console.log("message logged at:", new Date().toLocaleString())
    }
}

const decoratedLogger = loggerDecorator(logger); // decorated the logger function by using the loggerDecorator

// logger("Lawrence logged in: logger") // returns Lawrence logged in: logger

// decoratedLogger("Lawrence logged in: decoratedLogger") 

// ========================
//ordinary multiply function
let Multiply = (...args) => {
    return args.reduce((a, b) => a * b)
}

// validated integers
const Validator = (fn) => {
  return function(...args) {
    const validArgs = args.every(arg => !isNaN(arg));
    if (!validArgs) {
      throw new TypeError('Argument cannot be a non-integer');
    }
    return fn(...args);
  }
}

//decorated multiply function that only multiplies integers
// let MultiplyValidArgs = Validator(Multiply);
// logger(MultiplyValidArgs(1, 2, 3, 4, 5)) //returns 120



// tsc Structural/decorator.ts && node Structural/decorator.js