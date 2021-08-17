// allows objects with incompatible interfaces to collaborate.
// stock market data example
// conversion of units 
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
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        return 'Target: The default target\'s behavior. Target-request()';
    };
    return Target;
}());
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return 'Adaptee-specificRequest';
    };
    return Adaptee;
}());
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        // const result = this.adaptee.specificRequest().split('').reverse().join('');
        var result = this.adaptee.specificRequest();
        return "Adapter: (TRANSLATED) " + result;
    };
    return Adapter;
}(Target));
/**
* The client code supports all classes that follow the Target interface.
*/
function clientCode(target) {
    console.log(target.request(), 'clientCode');
}
var target = new Target();
clientCode(target);
var adaptee = new Adaptee();
console.log("instance Adaptee: " + adaptee.specificRequest());
var adapter = new Adapter(adaptee);
clientCode(adapter);
// tsc Structural/adapter.ts
// node Structural/adapter.js
