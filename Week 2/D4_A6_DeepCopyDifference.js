//Deep Copy (Isolation & Safety Use Case)
//Given order object
const order = 
{
    orderId: "ORD1001",
    customer: 
    {
        name: "Anita",
        address: 
        {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: 
    [
        { product: "Laptop", price: 70000 }
    ]
};

//(1)Create a deep copy of order using Structured Clone
const copyOrder=structuredClone(order)

//(2.1)Modify in copied object: customer.address.city
copyOrder.customer.address.city="Mumbai"

//(2.2)Modify in copied object: items[0].price
copyOrder.items[0].price=80000

//(3) Verify original object remains unchanged
console.log(order)
console.log(copyOrder)

/*Structured Clone Copies the entire object including the nested properties(objects and arrays) values not referenece. Hence
change in the copied data will not effect original data*/
