// use local storage to manage cart data
const addToDb = details => {
    let shoppingCart = getShoppingCart();
  
    // add quantity
    const jobDetails = shoppingCart.find(pd=> pd.id === details.id)
    if (!jobDetails) {
        const newJobs = [...shoppingCart,details]
        console.log(newJobs)
        localStorage.setItem('shopping-cart', JSON.stringify(newJobs));
    }
    // else {
    //     const newQuantity = jobDetails + 1;
    //     shoppingCart[details] = newQuantity;
    // }
   
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}