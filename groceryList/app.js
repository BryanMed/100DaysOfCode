const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', e => {
    e.preventDefault();
    const productName = form.elements.product;
    const productQty = form.elements.qty;
    addElement(productName.value, productQty.value);
    productName.value = '';
    productQty.value = '';

    
})

function addElement(productName, productQty){
    

    const product = document.createElement("b");
    const element = document.createElement("li");

    product.append(productName);
    element.append(product);
    element.append(` - ${productQty}`);
    list.append(element);
}