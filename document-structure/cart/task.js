'use strict';
const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const buttonAdd = document.querySelectorAll('.product__add');

productQuantityControls.forEach(elem => {
    const buttonAdd = elem.querySelector('.product__quantity-control_inc');
    const buttonRemove = elem.querySelector('.product__quantity-control_dec');
    const productQuantity = elem.querySelector('.product__quantity-value');

    buttonAdd.addEventListener('click', () => {
        productQuantity.textContent = parseInt(productQuantity.textContent) + 1;
    });

    buttonRemove.addEventListener('click', () => {
        productQuantity.textContent == 1 ? productQuantity.textContent = 1 : productQuantity.textContent--;
    });
});

buttonAdd.forEach(elem => {
    elem.addEventListener('click', e => {
        const currentProduct = e.target.closest('.product');
        const currentProductId = currentProduct.dataset.id;

        const currentProductValue = parseInt(currentProduct.querySelector('.product__quantity-value').textContent);
        const currentProductImg = currentProduct.querySelector('.product__image').src;
        const cartProducts = document.querySelector('.cart__products');

        let cartProduct = document.querySelector(`.cart__product[data-id="${currentProductId}"]`);

        if (cartProduct) {
            let cartValue = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + currentProductValue;
            cartProduct.querySelector('.cart__product-count').textContent = cartValue;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = currentProductId;
            cartProduct.innerHTML = `<img class="cart__product-image" src=${currentProductImg}>
            <div class="cart__product-count">${currentProductValue}</div>`;
            cartProducts.appendChild(cartProduct);
        }
    })
});