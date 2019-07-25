const multiply=require('./multiply.js');
const sum=require('./sum.js');
const sub=require('./sub.js');
const divide=require('./divide.js');
const a = "1234567890123456789012345678901234567890";
const b = "876548434567898765456789";


console.log(a + " + " + b + " = "  + sum.add(a , b));

console.log(a + " - " + b + " = " + sub.subtract(a , b));

console.log(a + " * " + b + " = " + multiply.pdt(a , b));

console.log(a + " / " + b + " = " + divide.div( a , b));