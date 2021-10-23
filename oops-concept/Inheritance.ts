class Person {
    name: string;
  
    age: number;
  
    constructor(name: string, age: number) {
  
        this.name = name;
  
        this.age = age;
  
    }
  
    getName(): string {
  
        return this.name;
  
    }
  
    getAge(): number {
  
        return this.age;
  
    }
  
        toString(){
  
        return (`Name of person: ${this.name}`);
  
    }
  
  }
  
  class Student extends Person {
  
    tmarks: number;
  
        id: string;
  
  constructor(name,age,id){
  
        super(name, age); // The super keyword is used to give reference to base class constructor and properties.
  
        this.id = id;
  
    }
  
    getMarks(): number {
  
        return this.tmarks;
  
    }
  
    setMarks(tmarks) {
  
        this.tmarks = tmarks;
  
    }
  
        toString(){
  
        return (`${super.toString()},Student ID: ${this.id}`);
  
    }
  
  }
  
  let _std1 = new Student('Sheena', 24, 6);
  
  _std1.getAge(); // output is 24
  
  _std1.setMarks(500);
  
  _std1.getMarks(); // output is 500
  
  _std1.toString(); // Name of person: Sheena,Student ID: 6
  
//   example another way
export class Bird {
    weight;
    
    height;
    
    constructor(weight, height) {
    
      this.weight = weight;
    
      this.height = height;
    
    }
    
    walk() {
    
      console.log('walk!');
    
    }
    
    }
    
    export class Penguin {
    
    bird;
    
    constructor(bird) {
    
      this.bird = bird;
    
    }
    
    walk() {
    
      this.bird.walk();
    
    }
    
    swim() {
    
      console.log('swim!');
    
    }
    
    }
    
    const bird = new Bird('20', '5');
    
    const penguin = new Penguin(bird);
    
    penguin.walk(); //walk!
    
    penguin.swim(); //swi
    
    // ========================
    class Polygon {
        height;
        width;
    constructor(height, width) {
    
      this.height = height;
    
      this.width = width;
    
    }
    
    }
    
    class Square extends Polygon {
    
    constructor(sideLength) {
    
      super(sideLength, sideLength);
    
    }
    
    get area() {
    
      return this.height * this.width;
    
    }
    
    set sideLength(newLength) {
    
      this.height = newLength;
    
      this.width = newLength;
    
    }
    
    }
    
    var square = new Square(2);
    console.log(square, square.area); // Square { height: 2, width: 2 }  , 4
    
    
    // tsc oops-concept/inheritance.ts
    // node oops-concept/inheritance.js