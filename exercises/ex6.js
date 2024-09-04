//ex1
const num = 10;
const str = "Hello";
const bool = true;

console.log(`num is: ${typeof(num)} str is: ${typeof(str)} bool is : ${typeof(bool)}`)

//ex2
const firstVar = 42;
const secondVar = '42';
const typesAreEqual = typeof(firstVar) == typeof(secondVar);

console.log(`first  is: ${typeof(firstVar)} ssecond is: ${typeof(secondVar)} types are equal :${(typesAreEqual)}`)

//ex3
let noValue;
const emptyValue = null;
console.log(`first is: ${typeof{noValue}}  second is: ${typeof{emptyValue}}`);

//ex4

const x = 11;
console.log(`variable x is of type ${typeof(x)} and value of ${(x)} `);