//Initial Coupons 
const coupons={
  'WELCOME10': {type:'percentage',value:10,minAmount:1000},
  'FLAT500':{type:'flat',value:500,minAmount:5000},
  'ELECTRONICS20':{type:'percentage',value:20,minAmount:10000,category:'electronics'}
};

//Coupon and discount functions
    //1) validateCoupon(couponCode,cartTotal,cartItems)
    function validateCoupon(couponCode,cartTotal,cartItems)
    {
        //Check if coupon exists
        const coupon=coupons[couponCode];
        //If coupon does not exist
        if(!coupon) 
        {
            //return coupon does not exist
            return {valid:false,message:"Invalid Coupon! Coupon does not exist"};
        }

        //if coupon minimum amout requirement not met
        if(cartTotal<coupon.minAmount)
        {
            //return that mimimum amount to apply coupon not met
            return {valid:false,message:"Minimum amount to apply coupon not met"};
        }

        //If coupon has a category
        if(coupon.category)
        {
            //get categories for cartItem for which coupon is to be applied
            const hasCategory=cartItems.some(item=>item.category===coupon.category);

            //If that category item does not exist
            if(!hasCategory)
            {
                //return category in cart not eligible your coupon
                return {valid:false,message:"Category not eligible for your coupon"};
            }
        }

        //return true, Coupon applies
        return {valid:true,message:"Coupon applied"};
    }

    //calculateDiscount(couponCode, cartTotal):Calculate discount amount based on coupon type
    // and Return discount amount
    function calculateDiscount(couponCode,cartTotal)
    {
        //get coupon using coupon code
        const coupon=coupons[couponCode];

        //If coupon is of percentage type
        if(coupon.type==='percentage')
        {
            //return percentage value of cartItem*coupon as discount
            return(cartTotal*coupon.value)/100;
        }
        //If coupon is of flat type
        else if(coupon.type==='flat')
        {
            //return flat value of coupon
            return coupon.value;
        }
        //return 0, if no discount based on coupon
        return 0;
    }

    //3) applyDiscount(cartTotal, couponCode, cartItems):
    function applyDiscount(cartTotal,couponCode,cartItems)
    {
        //check for validity of coupon
        const validation=validateCoupon(couponCode,cartTotal,cartItems);

        //if coupon is not valid
        if(!validation.valid)
        {
            //return final amount and coupon non validity message
            return{
                originalTotal:cartTotal,
                discount:0,
                finalTotal:cartTotal,
                message:validation.message
            };
        }

        //If coupon is valid,calculate discount
        const discount=calculateDiscount(couponCode, cartTotal);

        //return final amount and discount details
        return{
            originalTotal:cartTotal,
            discount,
            finalTotal: cartTotal - discount,
            message: "Discount applied successfully"
        };
    }

export {validateCoupon,calculateDiscount,applyDiscount}