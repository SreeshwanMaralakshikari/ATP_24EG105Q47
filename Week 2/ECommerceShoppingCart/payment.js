import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

//Payment processing Function
    //1) processPayment(paymentMethod,couponCode=null)
    function processPayment(paymentMethod,couponCode=null)
    {
        //Get cart items
        const items=getCartItems();
        //Get subTotal value(Before Discounts)
        let subtotal=getCartTotal();
        let discount=0;
        let total=subtotal;

        //Validate payment method (card/upi/cod)
        if(!validatePaymentMethod(paymentMethod))
        {
            //If payment method is not valid, return invalid payment method
            return{status:'failed',message:'Invalid payment method'};
        }

        //Check for validity of coupon codes; if Valid apply discounts and change total value
        if(couponCode)
        {
            const discountResult=applyDiscount(subtotal,couponCode,items);
            discount=discountResult.discount;
            total=discountResult.finalTotal;
        }

        //Reduce stock for all items
        items.forEach(item=>{
            reduceStock(item.id,item.quantity);
        });

        //Clear cart
        clearCart();

        //Generate order summary
        return{
            orderId: generateOrderId(),
            items,
            subtotal,
            discount,
            total,
            paymentMethod,
            status:'success',
            message:'Payment successful'
        };
    }
    
    //2) validatePaymentMethod(method): Check if method is valid (card/upi/cod)
    function validatePaymentMethod(method)
    {
        return ['card','upi','cod'].includes(method);
    }

    //3)generateOrderId(): Generate random order ID
    function generateOrderId()
    {
        return 'ORD'+Date.now();
    }

export {processPayment,validatePaymentMethod}