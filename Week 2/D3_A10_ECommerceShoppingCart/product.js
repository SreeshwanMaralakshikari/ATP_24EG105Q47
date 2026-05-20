//Product catalog: Product database (simulated)
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];


//Product Catalog Operations:
    //1) getProductById: Find and return product by ID
    function getProductById(id)
    {
        return products.find(item=>item.id===id);
    }

    //2) getAllProducts: Return all products
    function getAllProducts()
    {
        return products;
    }

    //3) getProductsByCategory(category): Filter products by category
    function getProductsByCategory(category)
    {
        return products.filter(product=>product.category==category);
    }

    //4) searchProducts(query): Search products by name (case-insensitive)
    function searchProducts(query)
    {
        return products.filter(product=>product.name.toLowerCase().includes(query.toLowerCase()))
    }

    //5) checkStock(productId,quantity) Check if product exist and has enough stock 
    // If both are true, Return true; Else Return false
    function checkStock(productId,quantity)
    {
        const product=getProductById(productId)
        return product && product.stock>=quantity
    }

    //6) reduceStock(productId,quantity): Reduce product stock after purchase
    function reduceStock(productId,quantity)
    {
        const product=getProductById(productId,quantity)
        if(product)
        {
            product.stock-=quantity
        }
    }

export {getProductById,getAllProducts,getProductsByCategory,searchProducts,checkStock,reduceStock}