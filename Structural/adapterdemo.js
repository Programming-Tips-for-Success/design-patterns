// API Response
const res = [{
    symbol: 'SIC DIVISION',
    exchange: 'Agricultural services',
    volume: 42232,
 }];
  
 // Required format
 const res2 = [{
    category: 'Agricultural services',
    name: 'SIC DIVISION',
    y: 42232,
 }];
  
 const mapping = {
  symbol: 'category',
  exchange: 'name',
  volume: 'y',
 };
  
 const highchartsAdapter = (response, mapping) => {
   //  console.log(response, mapping, 'highchartsAdapter');
  return response.map(item => {
    const normalized = {};
  
    // Normalize each response's item key, according to the mapping
    Object.keys(item).forEach(key => (normalized[mapping[key]] = item[key]));
    return normalized;
  });
 };
  
const data = highchartsAdapter(res, mapping);
console.log(data, 'data');
// node Structural/adapterdemo.js


// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
  // …
  return "$49.75";
  }
  }
  
  // new interface
  
  function AdvancedShipping() {
  this.login = function (credentials) { /* … / }; this.setStart = function (start) { / … / }; this.setDestination = function (destination) { / … */ };
  this.calculate = function (weight) { return "$39.50"; };
  }
  
  // adapter interface
  
  function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();
  
  shipping.login(credentials);
  
  return {
      request: function (zipStart, zipEnd, weight) {
          shipping.setStart(zipStart);
          shipping.setDestination(zipEnd);
          return shipping.calculate(weight);
      }
  };
}
function run() {
var shipping = new Shipping();
var credentials = { token: "30a8-6ee1" };
var adapter = new ShippingAdapter(credentials);

// original shipping object and interface

var cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost: " + cost);

// new shipping object with adapted interface

cost = adapter.request("78701", "10010", "2 lbs");

console.log("New cost: " + cost);
}