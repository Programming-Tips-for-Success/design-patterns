// Virtual Constructor
// eq1
// abstract class
// 2 class
// interface
// 2 class
// function

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

function clientCodeFactory(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCodeFactory(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCodeFactory(new ConcreteCreator2());

// eg
interface Vehicle {
  fetchSeats(): number;
  isSharingAllowed(): boolean;
}

class Newcar implements Vehicle{

  fetchSeats() {
      return 4;
  }

  isSharingAllowed() {
      return true;
  }
}

class Bike implements Vehicle {

  fetchSeats() {
      return 1;
  }

 isSharingAllowed() {
      return false;
  }
}

class VehicleCreationFactory {
  createVehicleObject(vehicle) {
    console.log(vehicle, 'vehicle');
    
      if(vehicle == "BIKE") {
          return new Bike();
      } else {
          return new Newcar();
      }
  }
}

class VehicleBookingController {
    main() {
      const factory = new VehicleCreationFactory();

      console.log("Enter the Vehicle name you want to book: ");

      const v = factory.createVehicleObject("BIKE");
      console.log("Vehicle that you have booked have "+v.fetchSeats()+" seats.");
  }
}

const d = new VehicleBookingController();
d.main();
// ts-node Creational/factory.ts
