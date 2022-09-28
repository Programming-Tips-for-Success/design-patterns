// An example with no decorator Support
// through Object Augmentation
function logger(obj, prop, message = 'logger') {
    let x = obj[prop];
      
    if(typeof x === 'function') {
      obj[prop] = (...args) => {
        console.log(message, ...args);
        x.call(obj, ...args)
      }
    } else if(obj.hasOwnProperty(prop)) {
      Object.defineProperty(obj, prop, {
        get() {
          console.log(message + ' - get:' , x);
          return x;
        },
        set(val) {
          console.log(message + ' - set:', val);
          x = val;
        }
      })
    }
  }
  class Calculator {
    total = 0;
    
    add(x) {
      this.total += x;
    }
  }
  const calc = new Calculator();
  logger(calc, 'total', 'total');
  logger(calc, 'add', 'add argument');
  calc.add(20);
  // logs
  // add argument: 20
  // total - get: 0
  // total - set: 20

  // node Structural/decoratordemo.js