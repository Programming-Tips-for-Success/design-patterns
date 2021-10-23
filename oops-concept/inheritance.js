"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Penguin = exports.Bird = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.toString = function () {
        return ("Name of person: " + this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = _super.call(this, name, age) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.getMarks = function () {
        return this.tmarks;
    };
    Student.prototype.setMarks = function (tmarks) {
        this.tmarks = tmarks;
    };
    Student.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + ",Student ID: " + this.id);
    };
    return Student;
}(Person));
var _std1 = new Student('Sheena', 24, 6);
_std1.getAge(); // output is 24
_std1.setMarks(500);
_std1.getMarks(); // output is 500
_std1.toString(); // Name of person: Sheena,Student ID: 6
//   example another way
var Bird = /** @class */ (function () {
    function Bird(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    Bird.prototype.walk = function () {
        console.log('walk!');
    };
    return Bird;
}());
exports.Bird = Bird;
var Penguin = /** @class */ (function () {
    function Penguin(bird) {
        this.bird = bird;
    }
    Penguin.prototype.walk = function () {
        this.bird.walk();
    };
    Penguin.prototype.swim = function () {
        console.log('swim!');
    };
    return Penguin;
}());
exports.Penguin = Penguin;
var bird = new Bird('20', '5');
var penguin = new Penguin(bird);
penguin.walk(); //walk!
penguin.swim(); //swi
// ========================
var Polygon = /** @class */ (function () {
    function Polygon(height, width) {
        this.height = height;
        this.width = width;
    }
    return Polygon;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        return _super.call(this, sideLength, sideLength) || this;
    }
    Object.defineProperty(Square.prototype, "area", {
        get: function () {
            return this.height * this.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "sideLength", {
        set: function (newLength) {
            // this.height = newLength;
            // this.width = newLength;
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}(Polygon));
var square = new Square(2);
console.log(square, square.area); // Square { height: 2, width: 2 }  , 4
// tsc oops-concept/inheritance.ts
// node oops-concept/inheritance.js
