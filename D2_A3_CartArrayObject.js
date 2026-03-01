/*Test data:
  const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];

Operations:
 1. Calculate total cart value
 2. Increase quantity of Mouse to 3 (immutably)
 3. Remove Laptop from cart
 4. Extract only { product, totalPrice } per item
 5. Check if all items cost more than ₹300*/

const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];

//(1) Calculate total cart value
let totalCartValue=0;
for(let item of cart)
{
  totalCartValue=totalCartValue+(item.price*item.qty)
}
//Print Total Cart Value
console.log("Total Cart Value:",totalCartValue)

//(2) Increase quantity of Mouse to 3 (immutably)
let increaseQuantityOfMouse=[];
for(let item of cart)
{
  if(item.product==="Mouse")
  {
    increaseQuantityOfMouse.push({id:item.id, product: item.product, price: item.price, qty: item.qty})
  }
  else
  {
    increaseQuantityOfMouse.push(item)
  }
}
//Print after increase quantity of Mouse to 3
console.log("Cart after increase of quantity of Mouse to 3:")
console.log(increaseQuantityOfMouse);


//(3) Remove Laptop from cart
let removeLaptopOfCart=[];
let c1;
for(let item of cart)
{
  if(item.product==="Laptop")
  {
    c1++;
  }
  else
  {
    removeLaptopOfCart.push(item)
  }
}
//Print after increase quantity of Mouse to 3
console.log("Cart after remove Laptop from cart:")
console.log(removeLaptopOfCart);

//(4) Extract only { product, totalPrice } per item
let productAndTotalPriceCart=[]
for(let item of cart)
{
  productAndTotalPriceCart.push({product: item.product,totalPrice: item.price*item.qty})
}
//Print cart with only product and totalPrice
console.log("Cart with only Product and Total Price:")
console.log(productAndTotalPriceCart)


//(5) Check if all items cost more than ₹300*
let allItemWithCostMore300=false
let itemsWithCostEqualOrLessThan300=[]
for(let item of cart)
{
  if(item.price>300)
  {
    allItemWithCostMore300=true
  }
  else
  {
    itemsWithCostEqualOrLessThan300.push(item)
  }
}

if(itemsWithCostEqualOrLessThan300)
  allItemWithCostMore300=false
//Print result of itemWithCostMore300
console.log("All Item Cost more than 300:",allItemWithCostMore300)
// List of Items with Cost Equal to or Less than 300 if they exist
if(allItemWithCostMore300)
{
  console.log("List of Items with Cost Equal to or Less than 300:")
  console.log(itemsWithCostEqualOrLessThan300)
}