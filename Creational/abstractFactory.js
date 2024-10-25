// AbstractFactory interface
class AbstractFactory {
  createProductA() {
    throw new Error("This method should be overridden!");
  }

  createProductB() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Factories produce a family of products that belong to a single variant
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

// AbstractProductA interface
class AbstractProductA {
  usefulFunctionA() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Products created by corresponding Concrete Factories
class ConcreteProductA1 extends AbstractProductA {
  usefulFunctionA() {
    return "The result of the product A1.";
  }
}

class ConcreteProductA2 extends AbstractProductA {
  usefulFunctionA() {
    return "The result of the product A2.";
  }
}

// AbstractProductB interface
class AbstractProductB {
  usefulFunctionB() {
    throw new Error("This method should be overridden!");
  }

  anotherUsefulFunctionB(collaborator) {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Products created by corresponding Concrete Factories
class ConcreteProductB1 extends AbstractProductB {
  usefulFunctionB() {
    return "The result of the product B1.";
  }

  anotherUsefulFunctionB(collaborator) {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ConcreteProductB2 extends AbstractProductB {
  usefulFunctionB() {
    return "The result of the product B2.";
  }

  anotherUsefulFunctionB(collaborator) {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

// Client code works with factories and products through abstract types
function testFactory(factory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

// Testing the client code with the first factory type
console.log("Client: Testing client code with the first factory type...");
testFactory(new ConcreteFactory1());

// Testing the same client code with the second factory type
console.log(
  "Client: Testing the same client code with the second factory type..."
);
testFactory(new ConcreteFactory2());

// Layout interface
class Layout {
  getSize() {
    throw new Error("This method should be overridden!");
  }

  getNavBar() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Layout classes
class WinLayout extends Layout {
  getSize() {
    return 8;
  }

  getNavBar() {
    return "right";
  }
}

class MacLayout extends Layout {
  getSize() {
    return 5;
  }

  getNavBar() {
    return "left";
  }
}

// Buttons interface
class Buttons {
  getMinimizeLocation() {
    throw new Error("This method should be overridden!");
  }

  getCloseLocation() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Button classes
class MacButtons extends Buttons {
  getMinimizeLocation() {
    return "leftTop";
  }

  getCloseLocation() {
    return "leftTop";
  }
}

class WinButtons extends Buttons {
  getMinimizeLocation() {
    return "rightTop";
  }

  getCloseLocation() {
    return "rightTop";
  }
}

// AbstractApp interface
class AbstractApp {
  createLayout() {
    throw new Error("This method should be overridden!");
  }

  createButtons() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete App classes
class WindowsApp extends AbstractApp {
  createLayout() {
    return new WinLayout();
  }

  createButtons() {
    return new WinButtons();
  }
}

class MacApp extends AbstractApp {
  createLayout() {
    return new MacLayout();
  }

  createButtons() {
    return new MacButtons();
  }
}

// Client class using the abstract factory
class Client {
  constructor(app) {
    this.layout = app.createLayout();
    this.buttons = app.createButtons();
  }

  openApp() {
    console.log("I am able to open my app");
    console.log(
      "layout of my App \n Screen size : " +
        this.layout.getSize() +
        " , NavBar : " +
        this.layout.getNavBar()
    );
    console.log(
      "Buttons of my App \n minimize : " +
        this.buttons.getMinimizeLocation() +
        " , close : " +
        this.buttons.getCloseLocation()
    );
  }
}

// Example usage
const client1 = new Client(new WindowsApp());
client1.openApp();
