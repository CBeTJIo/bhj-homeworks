document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const cart = document.querySelector('.cart__products');

  products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityEl = product.querySelector('.product__quantity-value');
    const addBtn = product.querySelector('.product__add');

    // Уменьшение количества
    decBtn.addEventListener('click', () => {
      let quantity = parseInt(quantityEl.textContent);
      if (quantity > 1) {
        quantityEl.textContent = quantity - 1;
      }
    });

    incBtn.addEventListener('click', () => {
      let quantity = parseInt(quantityEl.textContent);
      quantityEl.textContent = quantity + 1;
    });

    addBtn.addEventListener('click', () => {
      const productId = product.dataset.id;
      const productImage = product.querySelector('.product__image').src;
      const quantity = parseInt(quantityEl.textContent);

      const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingProduct) {
        const countEl = existingProduct.querySelector('.cart__product-count');
        countEl.textContent = parseInt(countEl.textContent) + quantity;
      } else {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = productId;

        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${quantity}</div>
        `;

        cart.appendChild(cartProduct);
      }

      quantityEl.textContent = 1;
    });
  });
});