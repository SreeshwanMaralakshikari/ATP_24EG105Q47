/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1) Use filter() to get only inStock products
const inStockProductsOnly=cart.filter((cartItem)=>cartItem.inStock)

//Print Details of Cart Items which are in Stock:
console.log("Details of Cart Items which are in Stock:")
console.log(inStockProductsOnly)

//2) Use map() to create a new array with:  { name, totalPrice }
let nameAndTotalPriceCart=cart.map((cartItem)=>
{
  return {name: cartItem.name,totalPrice: (cartItem.price*cartItem.quantity)}
})

//Print Details of Cart Items with only Name and Total Price
console.log("Details of Cart Items with only Name and Total Price:")
console.log(nameAndTotalPriceCart)

//3) Use reduce() to calculate grand total cart value
const grandTotalCartValue=cart.reduce((grandTotal,cartItem)=>grandTotal+(cartItem.price*cartItem.quantity),0)

//Print Grand Total Cart Value
console.log("Grand Total Value of Cart Items is:",grandTotalCartValue)

//4) Use find() to get details of "Mouse"
const findDetailsOfMouse=cart.find((cartItem)=>cartItem.name==="Mouse")

//If Mouse Item Exists in Cart
if(findDetailsOfMouse)
{
  //Print Details of Mouse 
  console.log("Details of Cart Item 'Mouse':")
  console.log(findDetailsOfMouse)
}
//If Mouse does not exist in cart
else
{
  //Print Mouse does not exist
  console.log("Mouse does not exist in cart")
}

//5) Use findIndex() to find the position of "Keyboard"
const findIndexOfKeyboard=cart.findIndex((cartItem)=>cartItem.name==="Keyboard")

//If Keyboard Exists in Cart
if(findIndexOfKeyboard!=-1)
{
  //Print Index of Keyboard in Cart
  console.log("Index of Cart Item 'Keyboard':",findIndexOfKeyboard)
}
//If Keyboard does not exist in cart
else
{
  //Print Keyboard does not exist
  console.log("Keyboard does not exist in cart")
}
