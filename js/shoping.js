const showDisplayProduct = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name)
    }
}

/* const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name)
    }
}
 */
const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    if (!name) {
        return;
    }
    //Display
    displayProduct(name)
    // showDisplayProduct(name)
    //add local storage
    addProductToCart(name)
    console.log(name);
    nameField.value = '';
}

const displayProduct = name => {
    const product = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    product.appendChild(li)

}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    console.log(cart);
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied);
}

plaseOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}
showDisplayProduct()
// displayLocalStorageCart()