

class Singleton {
  private static instance: Singleton;
 
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }
 
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
 
      return Singleton.instance;
  }
 
  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
      // ...
  }
}
 
/**
* The client code.
*/
 


function clientCodeS() {
   const s1 = Singleton.getInstance();
   const s2 = Singleton.getInstance();

   if (s1 === s2) {
       console.log('Singleton works, both variables contain the same instance.');
   } else {
       console.log('Singleton failed, variables contain different instances.');
   }
 }

 clientCodeS();

 // another example

 class FoodLogger {
    foodLog;
  constructor() {
    this.foodLog = []
  }
    
  log(order) {
    this.foodLog.push(order.foodItem)
    console.log(this, order, 'this');
    
    // do fancy code to send this log somewhere
  }
}

// this is the singleton
class FoodLoggerSingleton {
  private static instance;
    
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger()
    }
  }
  
  getFoodLoggerInstance() {
    return FoodLoggerSingleton.instance
  }
}

// module.exports = FoodLoggerSingleton

// An example of a Customer class using the singleton

// const FoodLogger = require('./FoodLogger')

const foodLogger = new FoodLoggerSingleton().getFoodLoggerInstance()


class Customer {
    price;
    food;
  constructor(order) {
    this.price = order.price
    this.food = order.foodItem
    foodLogger.log(order)
  }
  
  // other cool stuff happening for the customer
}

console.log();
// module.exports = Customer

// An example of the Restaurant class using the same singleton as the Customer class

// const FoodLogger = require('./FoodLogger')

const foodLogger2 = new FoodLoggerSingleton().getFoodLoggerInstance()

class Restaurant {
    quantity;
    food;
  constructor(inventory) {
    this.quantity = inventory.count
    this.food = inventory.foodItem
    foodLogger2.log(inventory)
  }
  
  // other cool stuff happening at the restaurant
}

const hbj = new Restaurant({count:1, foodItem: 'scd'});
const hbj1 = new Restaurant({count:12, foodItem: 'scd2'});

// module.exports = Restaurant
 // ts-node Creational/singleton.ts