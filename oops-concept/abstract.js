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
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    Company.prototype.display = function () {
        console.log(this.name);
    };
    return Company;
}());
var PersonDetails = /** @class */ (function (_super) {
    __extends(PersonDetails, _super);
    function PersonDetails(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    PersonDetails.prototype.find = function (name) {
        return new PersonDetails(name, 1);
    };
    return PersonDetails;
}(Company));
var emp = new PersonDetails("Sam", 100);
emp.display(); //Sam
var emp2 = emp.find('smith');
console.log(emp2);
//   tsc oops-concept/abstract.ts
