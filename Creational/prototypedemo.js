function Calculator() {
    // total is public because we declared it on the "this"
    this.total = 0;
    // precision is private because is a local variable/constant
    const precision = 2;
    // to precision is a public function expression with access to 
    // private properties
    this.toPrecision = (number) => Number(number.toFixed(precision));
    
    // create a getter for the property "result"  
    Object.defineProperty(this, 'result', {
      get() {
        return this.total;
      }
    })
  }
  // create a static member
  // only available on Calculator. It cannot be inherited
  Calculator.PI = 3.14;
  // prototype methods
  Calculator.prototype.add = function(x) {
    this.total += this.toPrecision(x);
  }
  Calculator.prototype.subtract = function(x) {
    this.total -= this.toPrecision(x);
  }
  Calculator.prototype.multiply = function(x) {
    this.total *= this.toPrecision(x);
  }
  Calculator.prototype.divide = function(x) {
    this.total /= this.toPrecision(x);
  }
  function ScienticCalculator() {
    // this is equivalent to calling super() 
    // when you extend another class
    // it will copy all properties from inside Calculator 
    // into ScienticCalculator
    // You can call as many constructor functions
    // to inherit properties from multiple ones
    Calculator.call(this);
  }
  // make ScienticCalculator extend Calculator
  // similar to what happens when you do 
  // "class Calculator extends ScienticCalculator"
  ScienticCalculator.prototype = Object.create(Calculator.prototype);
  ScienticCalculator.prototype.constructor = ScienticCalculator;
  const calc = new Calculator();
  const scientificCalc = new ScienticCalculator();
  console.log(calc);
  console.log(scientificCalc);
  console.log(calc.add(2));
  console.log(scientificCalc.add(2));


  // node Creational/prototypedemo.js