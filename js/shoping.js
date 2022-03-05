
const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    displayProduct(name)
    console.log(name);
    nameField.value = '';
}

const displayProduct = name => {
    const product = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    product.appendChild(li)

}