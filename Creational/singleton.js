// Define the main Singleton class
class Singleton {
    static instance;
  
    // Constructor should be private to prevent creating new instances with 'new'
    constructor() {
      if (Singleton.instance) {
        // If an instance already exists, return it
        return Singleton.instance;
      }
      
      // If no instance exists, set this as the new instance
      Singleton.instance = this;
  
      // Any custom properties or methods can be added here
      this.foodLog = [];  // Example property for logging information
    }
  
    // Public method to access the single instance of the class
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    // Business logic for logging, here we add an item to the food log
    log(order) {
      this.foodLog.push(order.foodItem);
      console.log(`Logging order: ${order.foodItem}`);
    }
  }
  
  // Test function to verify Singleton behavior
  function clientCode() {
    const logger1 = Singleton.getInstance();
    const logger2 = Singleton.getInstance();
  
    if (logger1 === logger2) {
      console.log("Singleton works, both variables contain the same instance.");
    } else {
      console.log("Singleton failed, variables contain different instances.");
    }
  }
  
  // Call the test function to verify
  clientCode();
  
  // Using the Singleton class within another class like Customer
  class Customer {
    constructor(order) {
      this.price = order.price;
      this.food = order.foodItem;
      Singleton.getInstance().log(order); // Use the same Singleton instance to log
    }
  }
  
  // Restaurant class using the same Singleton
  class Restaurant {
    constructor(inventory) {
      this.quantity = inventory.count;
      this.food = inventory.foodItem;
      Singleton.getInstance().log(inventory); // Use the same Singleton instance to log
    }
  }
  
  // Example usage of the classes
  const customer1 = new Customer({ price: 20, foodItem: "Pizza" });
  const restaurant1 = new Restaurant({ count: 5, foodItem: "Burger" });
  