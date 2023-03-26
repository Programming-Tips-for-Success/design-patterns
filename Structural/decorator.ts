

/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
interface Component1 {
    operation(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class ConcreteComponent implements Component1 {
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
class Decorator implements Component1 {
    protected component: Component1;

    constructor(component: Component1) {
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
function clientCode(component: Component1) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple1 = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple1);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);

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


// another example
class Customer2 {
    balance;
    foodItems;
    constructor(balance=20) {
      this.balance = balance
      this.foodItems = []
    }
    
    buy(food) {
      if (food.price < this.balance) {
        console.log('you should get it')
        this.balance -= food.price
        this.foodItems.push(food)
      }
      else {
        console.log('maybe you should get something else')
      }
    }
  }
  
  class Sandwich {
    type;
    price;
    constructor(type, price) {
      this.type = type
      this.price = price
    }
    
    order() {
      console.log(`You ordered a ${this.type} sandwich for $ ${this.price}.`)
    }
  }
  
  class DeluxeSandwich {
    type;
    price;
    constructor(baseSandwich) {
      this.type = `Deluxe ${baseSandwich.type}`
      this.price = baseSandwich.price + 1.75
    }
  }
  
  class ExquisiteSandwich {
    type;
    price;
    constructor(baseSandwich) {
      this.type = `Exquisite ${baseSandwich.type}`
      this.price = baseSandwich.price + 10.75
    }
    
    order() {
      console.log(`You ordered an ${this.type} sandwich. It's got everything you need to be happy for days.`)
    }
  }
  
//   module.exports = { Sandwich, DeluxeSandwich, ExquisiteSandwich }
  
//   module.exports = Customer2

// const { Sandwich, DeluxeSandwich, ExquisiteSandwich } = require('./Sandwich')
// const Customer = require('./Customer')

const cust1 = new Customer2(57)

const turkeySandwich = new Sandwich('Turkey', 6.49)
const bltSandwich = new Sandwich('BLT', 7.55)

const deluxeBltSandwich = new DeluxeSandwich(bltSandwich)
const exquisiteTurkeySandwich = new ExquisiteSandwich(turkeySandwich)

cust1.buy(turkeySandwich)
cust1.buy(bltSandwich)

// ts-node Structural/decorator.ts
