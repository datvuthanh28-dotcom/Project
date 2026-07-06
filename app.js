// Product Database
const products = {
    'cashmere-cardigan-men': {
        id: 'cashmere-cardigan-men',
        name: 'Cashmere Cardigan – Men',
        price: 6490000,
        image: 'image/best sellers/cardigan.png',
        description: 'Premium cashmere cardigan with a refined old-money silhouette.'
    },
    'cashmere-cardigan-women': {
        id: 'cashmere-cardigan-women',
        name: 'Cashmere Cardigan – Women',
        price: 6290000,
        image: 'image/best sellers/cardigan.png',
        description: 'Feminine cashmere cardigan with a slightly cropped, elegant fit.'
    },
    'linen-pants-men': {
        id: 'linen-pants-men',
        name: 'Linen Pants – Men',
        price: 2690000,
        image: 'image/best sellers/trousers.png',
        description: 'Tailored wide-leg linen trousers with a relaxed luxury fit.'
    },
    'linen-pants-women': {
        id: 'linen-pants-women',
        name: 'Linen Pants – Women',
        price: 2590000,
        image: 'image/best sellers/trousers.png',
        description: 'High-waisted linen trousers with a soft wide-leg shape.'
    },
    'linen-shirt-men': {
        id: 'linen-shirt-men',
        name: 'Linen Shirt – Men',
        price: 2390000,
        image: 'image/best sellers/shirt.png',
        description: 'Premium long-sleeve linen shirt with a relaxed but polished fit.'
    },
    'linen-shirt-women': {
        id: 'linen-shirt-women',
        name: 'Linen Shirt – Women',
        price: 2290000,
        image: 'image/best sellers/shirt.png',
        description: 'Lightweight linen shirt with a soft oversized silhouette.'
    },
    'suede-cap': {
        id: 'suede-cap',
        name: 'Suede Baseball Cap',
        price: 2190000,
        image: 'image/best sellers/cap.png',
        description: 'Premium suede baseball cap with a structured yet soft shape.'
    },
    'suede-loafer-men': {
        id: 'suede-loafer-men',
        name: 'Suede Loafer – Men',
        price: 5290000,
        image: 'image/best sellers/cardigan.png',
        description: 'Classic suede penny loafer with a refined profile.'
    },
    'suede-loafer-women': {
        id: 'suede-loafer-women',
        name: 'Suede Loafers – Women',
        price: 5190000,
        image: 'image/best sellers/cardigan.png',
        description: 'Elegant women\'s suede loafer with a slim, polished silhouette.'
    }
};

// Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.init();
    }

    init() {
        this.render();
        this.updateQuantity();
    }

    loadCart() {
        const savedCart = localStorage.getItem('maison-rue-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('maison-rue-cart', JSON.stringify(this.items));
    }

    addItem(productId, quantity = 1) {
        const product = products[productId];
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveCart();
        this.init();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.init();
    }

    updateItemQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.init();
            }
        }
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    formatPrice(price) {
        return price.toLocaleString('vi-VN') + ' VND';
    }

    render() {
        const container = document.getElementById('cartItemsContainer');
        const emptyMessage = document.getElementById('emptyCartMessage');

        if (this.items.length === 0) {
            container.style.display = 'none';
            emptyMessage.style.display = 'block';
            this.updateOrderSummary();
            return;
        }

        container.style.display = 'grid';
        emptyMessage.style.display = 'none';

        container.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="item-price">${this.formatPrice(item.price)}</p>
                </div>
                <div class="item-quantity">
                    <label>Quantity</label>
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="cart.updateItemQuantity('${item.id}', ${item.quantity - 1})">−</button>
                        <input type="number" value="${item.quantity}" min="1" onchange="cart.updateItemQuantity('${item.id}', parseInt(this.value))">
                        <button class="qty-btn" onclick="cart.updateItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="item-total">
                    <p>${this.formatPrice(item.price * item.quantity)}</p>
                </div>
                <button class="remove-btn" onclick="cart.removeItem('${item.id}')" title="Remove item">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `).join('');

        lucide.createIcons();
        this.updateOrderSummary();
    }

    updateOrderSummary() {
        const subtotal = this.getSubtotal();
        const totalQuantity = this.getTotalQuantity();

        document.getElementById('subtotal').textContent = this.formatPrice(subtotal);
        document.getElementById('summaryQuantity').textContent = totalQuantity;
        document.getElementById('totalPrice').textContent = this.formatPrice(subtotal);
    }

    updateQuantity() {
        const totalQuantity = this.getTotalQuantity();
        const quantityElement = document.getElementById('quantity');
        if (quantityElement) {
            quantityElement.textContent = totalQuantity > 0 ? `(${totalQuantity})` : '';
        }
    }
}

// Initialize cart
let cart;

document.addEventListener('DOMContentLoaded', function() {
    cart = new ShoppingCart();

    // Add demo items for testing (comment out when not needed)
    // cart.addItem('linen-shirt-men', 1);
    // cart.addItem('suede-cap', 2);
});

// Example function to add items from product pages
function addToCart(productId, quantity = 1) {
    if (cart) {
        cart.addItem(productId, quantity);
        alert('Product added to cart!');
    }
}
