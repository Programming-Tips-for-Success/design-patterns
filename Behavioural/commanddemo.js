// overview
// 4 const
// class
// 4 const
// class

// The list of operations can be performed
const addNumbers = (num1, num2) => num1 + num2;
const subNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num1 / num2;
 
// CalculatorCommand class initialize with execute function, undo function and the value 
class CalculatorCommand {
 constructor(execute, undo, value) {
  // console.log(execute, undo, value, 'CalculatorCommand');
   this.execute = execute;
   this.undo = undo;
   this.value = value;
 }
}
// Here we are creating the command objects
const DoAddition = value => new CalculatorCommand(addNumbers, subNumbers, value);
const DoSubtraction = value => new CalculatorCommand(subNumbers, addNumbers, value);
const DoMultiplication = value => new CalculatorCommand(multiplyNumbers, divideNumbers, value);
const DoDivision = value => new CalculatorCommand(divideNumbers, multiplyNumbers, value);
 
// AdvancedCalculator which maintains the list of commands to execute and undo the executed command
class AdvancedCalculator {
 constructor() {
   this.current = 0;
   this.commands = [];
 }
 
 execute(command) {
  // console.log(command, 'execute');
   this.current = command.execute(this.current, command.value);
  // console.log(this.current, 'current');

   this.commands.push(command);
 }
 
 undo() {
   let command = this.commands.pop();
   this.current = command.undo(this.current, command.value);
 }
 
 getCurrentValue() {
   return this.current;
 }
}

// usage
const advCal = new AdvancedCalculator();
 
// invoke commands
advCal.execute(DoAddition(50)); //50
advCal.execute(DoSubtraction(25)); //25
advCal.execute(DoMultiplication(4)); //100
advCal.execute(DoDivision(2)); //50

// undo commands
advCal.undo();
const a1 = advCal.getCurrentValue(); //100
console.log(a1);

   // node Behavioural/commanddemo.js
