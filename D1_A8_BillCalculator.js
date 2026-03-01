/*Initial data:
        let totalAmount = 0;

🎯 Tasks
  1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount*/

//Given total amount
let totalAmount = 0;

//(1) Add ₹500 to the total
totalAmount=totalAmount+500

//(2) Add ₹1200 to the total
totalAmount+=1200

//(3)Apply a ₹200 discount
let discount=200
totalAmount-=discount

//(4) Add 18% GST
let gst=totalAmount*0.18
totalAmount+=gst

//(5) Print the final bill amount
console.log("Final Bill Amount:",totalAmount)

