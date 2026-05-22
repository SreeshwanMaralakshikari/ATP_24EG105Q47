// Copy & Extend an Array with Spread Operator(Shallow Copy)
//Given Object Fruits
let fruits = ["apple", "banana"];

//Shallow Copy of fruits array using Spread Operator and adding a property to it 
let moreFruits=[...fruits,"orange"]

//Output the current objects both: fruits and moreFruits
console.log(fruits)
console.log(moreFruits)