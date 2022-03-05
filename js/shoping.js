
const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;
    console.log(name);
    nameField.value = '';
}