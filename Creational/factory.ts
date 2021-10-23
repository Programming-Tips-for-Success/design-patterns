
// (Method - Virtual Constructor) 

// create object without exposing the creation logic to the client and refer to newly created object using a common interface. basically use factory methods to deal with the problem of creating objects .
abstract class Creator {
 
  public abstract factoryMethod(): Product;
 
  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  public someOperation(): string {
      // Call the factory method to create a Product object.
      const product = this.factoryMethod();
      // Now, use the product.
      return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}
 
/**
* Concrete Creators override the factory method in order to change the
* resulting product's type.
*/
class ConcreteCreator1 extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  public factoryMethod(): Product {
      return new ConcreteProduct1();
  }
}
 
class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
      return new ConcreteProduct2();
  }
}
 
interface Product {
  operation(): string;
}
 
class ConcreteProduct1 implements Product {
  public operation(): string {
      return '{Result of the ConcreteProduct1}';
  }
}
 
class ConcreteProduct2 implements Product {
  public operation(): string {
      return '{Result of the ConcreteProduct2}';
  }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());



// Factory Object Creation Pattern

// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript

// function makeRobot(name, job) {
//   return {
//     name: name,
//     job: job,
     
//     introduce: function() {
//       console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
//     },
//   };
// }
 
// var bender = makeRobot("Bender", "bending");
// bender.introduce();   // Hi! I'm Bender. My job is bending.
 
// var wallE = makeRobot("Wall-E", "trash collection");
// wallE.introduce();    // Hi! I'm Wall-E. My job is trash collection.
// //  Constructor Pattern
// function Robot(name, job) {
//   this.name = name;
//   this.job = job;
 
//   this.introduce = function() {
//     console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
//   };
// }

