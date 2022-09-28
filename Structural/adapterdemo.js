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
    console.log(response, mapping, 'highchartsAdapter');
  return response.map(item => {
    const normalized = {};
  
    // Normalize each response's item key, according to the mapping
    Object.keys(item).forEach(key => (normalized[mapping[key]] = item[key]));
    return normalized;
  });
 };
  
const vf = highchartsAdapter(res, mapping);
console.log(vf, 'vd');
// node Structural/adapterdemo.js
