
interface AbstractFactory {
  createProductA(): AbstractProductA;
 
  createProductB(): AbstractProductB;
}
 
/**
* Concrete Factories produce a family of products that belong to a single
* variant. The factory guarantees that resulting products are compatible. Note
* that signatures of the Concrete Factory's methods return an abstract product,
* while inside the method a concrete product is instantiated.
*/
class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA1();
  }
 
  public createProductB(): AbstractProductB {
      return new ConcreteProductB1();
  }
}
 
/**
* Each Concrete Factory has a corresponding product variant.
*/
class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
      return new ConcreteProductA2();
  }
 
  public createProductB(): AbstractProductB {
      return new ConcreteProductB2();
  }
}
 
/**
* Each distinct product of a product family should have a base interface. All
* variants of the product must implement this interface.
*/
interface AbstractProductA {
  usefulFunctionA(): string;
}
 
/**
* These Concrete Products are created by corresponding Concrete Factories.
*/
class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
      return 'The result of the product A1.';
  }
}
 
class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
      return 'The result of the product A2.';
  }
}
 
/**
* Here's the the base interface of another product. All products can interact
* with each other, but proper interaction is possible only between products of
* the same concrete variant.
*/
interface AbstractProductB {
  /**
   * Product B is able to do its own thing...
   */
  usefulFunctionB(): string;
 
  /**
   * ...but it also can collaborate with the ProductA.
   *
   * The Abstract Factory makes sure that all products it creates are of the
   * same variant and thus, compatible.
   */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
 
/**
* These Concrete Products are created by corresponding Concrete Factories.
*/
class ConcreteProductB1 implements AbstractProductB {
 
  public usefulFunctionB(): string {
      return 'The result of the product B1.';
  }
 
  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `The result of the B1 collaborating with the (${result})`;
  }
}
 
class ConcreteProductB2 implements AbstractProductB {
 
  public usefulFunctionB(): string {
      return 'The result of the product B2.';
  }
 
  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `The result of the B2 collaborating with the (${result})`;
  }
}


/**
* The client code works with factories and products only through abstract
* types: AbstractFactory and AbstractProduct. This lets you pass any factory or
* product subclass to the client code without breaking it.
*/
function testFactory(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
   
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
  }

console.log('Client: Testing client code with the first factory type...');
testFactory(new ConcreteFactory1());
  
console.log('Client: Testing the same client code with the second factory type...');
testFactory(new ConcreteFactory2());

// e.g

interface Layout {
  getSize();
  getNavBar();
}

class WinLayout implements Layout{

  getSize() {
      return 8;
  }

  getNavBar() {
      return "right";
  }
}

class MacLayout implements Layout{

  getSize() {
      return 5;
  }

  getNavBar() {
      return "left";
  }
}

interface Buttons {
  getMinimizeLocation();
  getCloseLocation();
}

class MacButtons implements Buttons{
  
  getMinimizeLocation() {
      return "leftTop";
  }

  
  getCloseLocation() {
      return "leftTop";
  }
}

class WinButtons implements Buttons{
  
  getMinimizeLocation() {
      return "rightTop";
  }

  
   getCloseLocation() {
      return "rightTop";
  }
}

interface AbstractApp {
  createLayout();
  createButtons();
}

 class WindowsApp implements AbstractApp{
  
   createLayout() {
      return new WinLayout();
  }

  
   createButtons() {
      return new WinButtons();
  }
}

 class MacApp implements AbstractApp{
  
  createLayout() {
      return new MacLayout();
  }

  
  createButtons() {
      return new MacButtons();
  }
}

class Client {

  layout;
  buttons;

  constructor(app: AbstractApp) {
      this.layout = app.createLayout();
      this.buttons = app.createButtons();
  }

  openApp() {
      console.log("I am able to open my app");
      console.log("layout of my App \n Screen size : "+ this.layout.getSize()+" , NavBar : "+ this.layout.getNavBar());
      console.log("Buttons of my App \n minimize : "+this.buttons.getMinimizeLocation()+" , close : "+this.buttons.getCloseLocation());
  }
}

const n = new Client(new WindowsApp());
n.openApp();

// ts-node Creational/abstractFactory.ts

 