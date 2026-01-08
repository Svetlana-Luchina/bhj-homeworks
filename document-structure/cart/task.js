document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    const cartProducts = document.querySelector('.cart__products');
    
    productsContainer.addEventListener('click', (event) => {
        const target = event.target;
        const product = target.closest('.product');
        
        if (!product) return;
        
        const quantityValue = product.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent);
        
        if (target.classList.contains('product__quantity-control_dec')) {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        }
        
        if (target.classList.contains('product__quantity-control_inc')) {
            quantity++;
            quantityValue.textContent = quantity;
        }
    });
    
    productsContainer.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target.classList.contains('product__add')) {
            const product = target.closest('.product');
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image');
            const quantityValue = product.querySelector('.product__quantity-value');
            const quantity = parseInt(quantityValue.textContent);
            
            const existingCartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
            
            if (existingCartProduct) {
                const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
                const currentCount = parseInt(cartProductCount.textContent);
                cartProductCount.textContent = currentCount + quantity;
            } else {
                const cartProduct = document.createElement('div');
                cartProduct.className = 'cart__product';
                cartProduct.dataset.id = productId;
                
                const cartProductImage = document.createElement('img');
                cartProductImage.className = 'cart__product-image';
                cartProductImage.src = productImage.src;
                cartProductImage.alt = productImage.alt;
                
                const cartProductCount = document.createElement('div');
                cartProductCount.className = 'cart__product-count';
                cartProductCount.textContent = quantity;
                
                cartProduct.appendChild(cartProductImage);
                cartProduct.appendChild(cartProductCount);
                cartProducts.appendChild(cartProduct);
            }
        }
    });
});