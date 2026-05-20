import { getProductById, checkStock } from './product.js';

//Intial Cart Array
let cartItems = [];

//Shopping cart operations
//1) Function to add product to cart
    function addToCart(productId, quantity) 
    {
        //Get product details
        const product = getProductById(productId);

        //If Product not available
        if(!product)
        {
            //return product not found
            return "Product not Found";
        }

        //If Product is available but not stock
        if(!checkStock(productId,quantity))
        {
            //return insufficent stock
            return "Insufficient Stock";
        }

        //Check for Product availability in cart
        const existingItem=cartItems.find(item=>item.productId===productId);
        //If Product already in cart
        if(existingItem)
        {
            //Update quantity
            existingItem.quantity+=quantity;
        }
        //If Product not in cart
        else
        {
            //add new item to cart
            cartItems.push({productId,quantity});
        }

        //return result
        return "Item added to cart";
    }

    //2) removeFromCart(productId): Remove product from cart
    function removeFromCart(productId)
    {
        cartItems=cartItems.filter(item=>item.productId!==productId);
        return "Item Eemoved from cart";
    }

    //3) updateQuantity(productId, newQuantity):Check stock before updating
    // If Available, Update quantity of product in cart
    //Else return insufficient stock
    function updateQuantity(productId, newQuantity)
    {
        //Check if Stock is available
        if(!checkStock(productId,newQuantity))
        {
            //return insufficent stock
            return "Insufficient stock to update quantity";
        }

        //Search for Product Availability in Cart
        const updateItem=cartItems.find(item=>item.productId===productId);
        //If not available in cart
        if(!updateItem)
        {
            //return Item not there in cart
            return "Item not found in cart";
        }
        //Else Update Quantity
        item.quantity=newQuantity;
        return "Quantity updated";
    }

    //4) getCartItems(): Return all cart items with product details
    function getCartItems()
    {
        //If cart Item not available, this will return false
        return cartItems.map(item=>{
            const product = getProductById(item.productId);
            //This will return details
            return {
                ...product,
                quantity: item.quantity,
                totalPrice: product.price*item.quantity
            };
        });
    }

    //5) getCartTotal(): Calculate total price of all items in cart and return total value
    function getCartTotal()
    {
        //use reduct to calculate sum of cart values and return total value
        return getCartItems().reduce((sum,item)=>sum+item.totalPrice,0);
    }

    //6) clearCart(): Empty the cart
    function clearCart()
    {
        //Reinitialize Cart array with empty array
        cartItems=[];
    }

    export {addToCart,removeFromCart,updateQuantity,getCartItems,getCartTotal,clearCart}