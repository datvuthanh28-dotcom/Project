// ============ PRODUCT DATABASE ============
const products = {
  men: [
    {
      id: 1,
      name: "Cashmere Cardigan",
      price: 6490000,
      category: "men",
      images: ["image/Cashmere Cardigan - Men/BEIGE/1.png", "image/Cashmere Cardigan - Men/BEIGE/2.png", "image/Cashmere Cardigan - Men/BEIGE/3.png", "image/Cashmere Cardigan - Men/BEIGE/4.png", "image/Cashmere Cardigan - Men/NAVY BLUE/1.png", "image/Cashmere Cardigan - Men/NAVY BLUE/2.png", "image/Cashmere Cardigan - Men/NAVY BLUE/3.png", "image/Cashmere Cardigan - Men/NAVY BLUE/4.png"],
      colors: ["BEIGE", "NAVY BLUE"],
      colorImages: {
        "BEIGE": ["image/Cashmere Cardigan - Men/BEIGE/1.png", "image/Cashmere Cardigan - Men/BEIGE/2.png", "image/Cashmere Cardigan - Men/BEIGE/3.png", "image/Cashmere Cardigan - Men/BEIGE/4.png"],
        "NAVY BLUE": ["image/Cashmere Cardigan - Men/NAVY BLUE/1.png", "image/Cashmere Cardigan - Men/NAVY BLUE/2.png", "image/Cashmere Cardigan - Men/NAVY BLUE/3.png", "image/Cashmere Cardigan - Men/NAVY BLUE/4.png"]
      },
      description: "Premium cashmere cardigan with a refined old-money silhouette. Soft-touch knit, classic crew neckline, tonal buttons, ribbed cuffs and hem. Designed for a clean, elevated layering look. Finished with subtle MR tonal embroidery on the left chest."
    },
    {
      id: 2,
      name: "Linen Pants",
      price: 2690000,
      category: "men",
      images: ["image/Linen Pants - Men/1.png", "image/Linen Pants - Men/2.png", "image/Linen Pants - Men/3.png", "image/Linen Pants - Men/4.png"],
      colors: ["NATURAL WHITE"],
      colorImages: {
        "NATURAL WHITE": ["image/Linen Pants - Men/1.png", "image/Linen Pants - Men/2.png", "image/Linen Pants - Men/3.png", "image/Linen Pants - Men/4.png"]
      },
      description: "Tailored wide-leg linen trousers with a relaxed luxury fit. Front pleats, structured waistband, belt loops, side pockets, and clean back welt pockets. Lightweight, breathable, and suitable for both resort and city styling."
    },
    {
      id: 3,
      name: "Linen Shirt",
      price: 2390000,
      category: "men",
      images: ["image/Linen Shirt - Men/1.png", "image/Linen Shirt - Men/2.png", "image/Linen Shirt - Men/3.png", "image/Linen Shirt - Men/4.png", "image/Linen Shirt - Men/5.png"],
      colors: ["IVORY WHITE"],
      colorImages: {
        "IVORY WHITE": ["image/Linen Shirt - Men/1.png", "image/Linen Shirt - Men/2.png", "image/Linen Shirt - Men/3.png", "image/Linen Shirt - Men/4.png", "image/Linen Shirt - Men/5.png"]
      },
      description: "Premium long-sleeve linen shirt with a relaxed but polished fit. Classic collar, front button closure, natural linen texture, curved hem, and refined cuffs."
    },
    {
      id: 4,
      name: "Suede Loafer",
      price: 5290000,
      category: "men",
      images: ["image/Suede Loafer - Men/1.png", "image/Suede Loafer - Men/2.png", "image/Suede Loafer - Men/3.png"],
      colors: ["SUEDE TAN"],
      colorImages: {
        "SUEDE TAN": ["image/Suede Loafer - Men/1.png", "image/Suede Loafer - Men/2.png", "image/Suede Loafer - Men/3.png"]
      },
      description: "Classic suede penny loafer with a refined profile. Soft suede upper, leather lining, almond toe shape, hand-stitched moc toe detailing, low stacked heel, and slim leather sole. Inside branding: Maison Rue."
    }
  ],
  women: [
    {
      id: 5,
      name: "Cashmere Cardigan",
      price: 6290000,
      category: "women",
      images: ["image/Cashmere Cardigan - Women/BEIGE/1.png", "image/Cashmere Cardigan - Women/BEIGE/2.png", "image/Cashmere Cardigan - Women/BEIGE/3.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/1.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/2.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/3.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/4.png"],
      colors: ["BEIGE", "GRAPEFRUIT SODA"],
      colorImages: {
        "BEIGE": ["image/Cashmere Cardigan - Women/BEIGE/1.png", "image/Cashmere Cardigan - Women/BEIGE/2.png", "image/Cashmere Cardigan - Women/BEIGE/3.png"],
        "GRAPEFRUIT SODA": ["image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/1.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/2.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/3.png", "image/Cashmere Cardigan - Women/GRAPEFRUIT SODA/4.png"]
      },
      description: "Feminine cashmere cardigan with a slightly cropped, elegant fit. Soft round neckline, delicate button front, ribbed hem and cuffs. Finished with subtle MR tonal embroidery on the left chest."
    },
    {
      id: 6,
      name: "Linen Pants",
      price: 2590000,
      category: "women",
      images: ["image/Linen Pants - Women/1.png", "image/Linen Pants - Women/2.png", "image/Linen Pants - Women/3.png", "image/Linen Pants - Women/4.png"],
      colors: ["NATURAL WHITE"],
      colorImages: {
        "NATURAL WHITE": ["image/Linen Pants - Women/1.png", "image/Linen Pants - Women/2.png", "image/Linen Pants - Women/3.png", "image/Linen Pants - Women/4.png"]
      },
      description: "High-waisted linen trousers with a soft wide-leg shape. Front pleats, elegant drape, side pockets, belt loops, and clean waistband finishing. Designed to be worn with tucked-in linen shirts, tanks, or cashmere knits."
    },
    {
      id: 7,
      name: "Linen Shirt",
      price: 2290000,
      category: "women",
      images: ["image/Linen Shirt - Women/1.png", "image/Linen Shirt - Women/2.png", "image/Linen Shirt - Women/3.png", "image/Linen Shirt - Women/4.png", "image/Linen Shirt - Women/5.png"],
      colors: ["IVORY WHITE"],
      colorImages: {
        "IVORY WHITE": ["image/Linen Shirt - Women/1.png", "image/Linen Shirt - Women/2.png", "image/Linen Shirt - Women/3.png", "image/Linen Shirt - Women/4.png", "image/Linen Shirt - Women/5.png"]
      },
      description: "Lightweight linen shirt with a soft oversized silhouette. Classic collar, button front, relaxed sleeves, curved hem, and clean minimal finishing. Can be worn tucked, half-tucked, or open over a tank for a classic look."
    },
    {
      id: 8,
      name: "Suede Loafers",
      price: 5190000,
      category: "women",
      images: ["image/Suede Loafers - Women/1.png", "image/Suede Loafers - Women/2.png", "image/Suede Loafers - Women/3.png"],
      colors: ["SUEDE TAN"],
      colorImages: {
        "SUEDE TAN": ["image/Suede Loafers - Women/1.png", "image/Suede Loafers - Women/2.png", "image/Suede Loafers - Women/3.png"]
      },
      description: "Elegant women's suede loafer with a slim, polished silhouette. Soft suede upper, leather lining, penny strap detail, moc-toe stitching, low comfortable heel, and clean leather sole. Inside branding: Maison Rue."
    }
  ],
  accessories: [
    {
      id: 9,
      name: "Suede Baseball Cap",
      price: 2190000,
      category: "accessories",
      images: [
        "image/Suede Baseball Cap/DARK-CHOCOLATE-BROWN/1.png", 
        "image/Suede Baseball Cap/DARK-CHOCOLATE-BROWN/2.png", 
        "image/Suede Baseball Cap/DEEP-TEAL/1.png", 
        "image/Suede Baseball Cap/DEEP-TEAL/2.png"
      ],
      colors: ["DARK-CHOCOLATE-BROWN", "DEEP-TEAL"],
      colorImages: {
        "DARK-CHOCOLATE-BROWN": [
          "image/Suede Baseball Cap/DARK-CHOCOLATE-BROWN/1.png", 
          "image/Suede Baseball Cap/DARK-CHOCOLATE-BROWN/2.png"
        ],
        "DEEP-TEAL": [
          "image/Suede Baseball Cap/DEEP-TEAL/1.png", 
          "image/Suede Baseball Cap/DEEP-TEAL/2.png"
        ]
      },
      description: "Premium suede baseball cap with a structured yet soft shape..."
    }
  ]
};

// ============ CART MANAGEMENT ============
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, quantity = 1, selectedColor = null) {
  const allProducts = [...products.men, ...products.women, ...products.accessories];
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId && item.selectedColor === selectedColor);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity,
      cartItemId: Date.now(),
      selectedColor: selectedColor || product.colors[0]
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification('Thêm vào giỏ hàng thành công!');
}

function removeFromCart(cartItemId) {
  const itemId = Number(cartItemId);
  cart = cart.filter(item => item.cartItemId !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function clearCart() {
  if (confirm('Bạn có chắc chắn muốn xóa hết sản phẩm?')) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('quantity');
  if (cartBadge) {
    cartBadge.textContent = count > 0 ? `(${count})` : '';
  }
}

function updateQuantity(cartItemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(cartItemId);
    return;
  }
  
  const itemId = Number(cartItemId);
  const item = cart.find(item => item.cartItemId === itemId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

function getTotalPrice() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getTotalQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' VND';
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ============ RENDER FUNCTIONS ============
function renderProductGrid(category) {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  const categoryProducts = products[category] || [];
  
  container.innerHTML = categoryProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.colorImages[product.colors[0]][0]}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p class="product-price">${formatPrice(product.price)}</p>
      <button class="btn-primary" onclick="goToProductDetail(${product.id})">Xem Chi Tiết</button>
    </div>
  `).join('');
}

function renderProductDetail(productId) {
  const allProducts = [...products.men, ...products.women, ...products.accessories];
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    document.body.innerHTML = '<h1>Sản phẩm không tìm thấy</h1>';
    return;
  }
  
  const container = document.getElementById('product-detail-container');
  if (!container) return;
  
  const defaultColor = product.colors[0];
  const defaultImages = product.colorImages[defaultColor];
  
  container.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <div class="gallery-main">
          <img id="mainImage" src="${defaultImages[0]}" alt="${product.name}">
          <button class="gallery-btn prev" onclick="prevImage()">❮</button>
          <button class="gallery-btn next" onclick="nextImage()">❯</button>
          <div class="image-counter">
            <span id="imageCounter">1</span> / <span id="totalImages">${defaultImages.length}</span>
          </div>
        </div>
      </div>
      
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-category">${product.category.toUpperCase()}</p>
        <p class="product-price">${formatPrice(product.price)}</p>
        
        <div class="product-description">
          <h3>Mô Tả Sản Phẩm</h3>
          <p>${product.description}</p>
        </div>
        
        <div class="product-colors">
          <h3>Màu Sắc</h3>
          <div class="color-options" id="colorOptions">
            ${product.colors.map((color, index) => `
              <span class="color-tag ${index === 0 ? 'active' : ''}" onclick="switchColor('${color}', ${productId})" style="cursor: pointer;">
                ${color}
              </span>
            `).join('')}
          </div>
        </div>
        
        <div class="product-actions">
          <div class="quantity-selector">
            <label for="quantity">Số Lượng:</label>
            <div class="quantity-controls">
              <button onclick="decreaseQuantity()">−</button>
              <input type="number" id="quantity" value="1" min="1">
              <button onclick="increaseQuantity()">+</button>
            </div>
          </div>
          <button class="btn-primary btn-large" onclick="addProductToCart(${productId})">
            <i class="fas fa-shopping-bag"></i> THÊM VÀO GIỎ
          </button>
        </div>
        
        <button class="btn-secondary" onclick="window.history.back()">← Quay Lại</button>
      </div>
    </div>
  `;
  
  // Store current product and index for gallery navigation
  window.currentProduct = product;
  window.currentImageIndex = 0;
  window.currentColor = defaultColor;
  window.currentImages = defaultImages;
  
  // Gallery navigation functions
  window.nextImage = function() {
    window.currentImageIndex = (window.currentImageIndex + 1) % window.currentImages.length;
    updateGalleryImage();
  };
  
  window.prevImage = function() {
    window.currentImageIndex = (window.currentImageIndex - 1 + window.currentImages.length) % window.currentImages.length;
    updateGalleryImage();
  };
  
  window.updateGalleryImage = function() {
    document.getElementById('mainImage').src = window.currentImages[window.currentImageIndex];
    document.getElementById('imageCounter').textContent = window.currentImageIndex + 1;
    document.getElementById('totalImages').textContent = window.currentImages.length;
  };
}

function switchColor(color, productId) {
  const allProducts = [...products.men, ...products.women, ...products.accessories];
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) return;
  
  window.currentColor = color;
  window.currentImages = product.colorImages[color];
  window.currentImageIndex = 0;
  
  // Update main image
  document.getElementById('mainImage').src = window.currentImages[0];
  document.getElementById('imageCounter').textContent = '1';
  document.getElementById('totalImages').textContent = window.currentImages.length;
  
  // Update active color tag
  document.querySelectorAll('.color-tag').forEach(tag => {
    if (tag.textContent.trim() === color) {
      tag.classList.add('active');
      tag.style.backgroundColor = '#B8A894';
      tag.style.color = '#FFF';
    } else {
      tag.classList.remove('active');
      tag.style.backgroundColor = '#E8E1D6';
      tag.style.color = '#2B211C';
    }
  });
}

function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <h2>Giỏ Hàng Trống</h2>
        <p>Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
        <a href="men.html" class="btn-primary">Tiếp Tục Mua Sắm</a>
      </div>
    `;
    return;
  }
  
  const cartItems = cart.map(item => {
    const imageToShow = item.selectedColor && item.colorImages ? item.colorImages[item.selectedColor][0] : item.images[0];
    return `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${imageToShow}" alt="${item.name}">
      </div>
      
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p class="cart-item-category">${item.category.toUpperCase()}</p>
        ${item.selectedColor ? `<p class="cart-item-color">Màu: ${item.selectedColor}</p>` : ''}
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      
      <div class="cart-item-quantity">
        <label>Số Lượng:</label>
        <div class="quantity-controls">
          <button onclick="decreaseCartItemQuantity(${item.cartItemId})">−</button>
          <input type="number" value="${item.quantity}" onchange="updateCartItemQuantity(${item.cartItemId}, this.value)" min="1">
          <button onclick="increaseCartItemQuantity(${item.cartItemId})">+</button>
        </div>
      </div>
      
      <div class="cart-item-total">
        <p>${formatPrice(item.price * item.quantity)}</p>
      </div>
      
      <button class="btn-remove" onclick="removeFromCart(${item.cartItemId})">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  }).join('');
  
  const summary = `
    <div class="cart-summary">
      <div class="summary-row">
        <span>Tổng Số Sản Phẩm:</span>
        <span>${getTotalQuantity()}</span>
      </div>
      <div class="summary-row total">
        <span>Tổng Tiền:</span>
        <span>${formatPrice(getTotalPrice())}</span>
      </div>
      <button class="btn-primary btn-large">Thanh Toán</button>
      <button class="btn-secondary" onclick="clearCart()">Xóa Hết Sản Phẩm</button>
    </div>
  `;
  
  container.innerHTML = `
    <div class="cart-content">
      <div class="cart-items">${cartItems}</div>
      ${summary}
    </div>
  `;
}

// ============ UTILITY FUNCTIONS ============
function goToProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function increaseQuantity() {
  const input = document.getElementById('quantity');
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
  const input = document.getElementById('quantity');
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function addProductToCart(productId) {
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const selectedColor = window.currentColor || null;
  addToCart(productId, quantity, selectedColor);
  document.getElementById('quantity').value = 1;
}

function increaseCartItemQuantity(cartItemId) {
  const itemId = Number(cartItemId);
  const item = cart.find(i => i.cartItemId === itemId);
  if (item) updateQuantity(itemId, item.quantity + 1);
}

function decreaseCartItemQuantity(cartItemId) {
  const itemId = Number(cartItemId);
  const item = cart.find(i => i.cartItemId === itemId);
  if (item && item.quantity > 1) updateQuantity(itemId, item.quantity - 1);
}

function updateCartItemQuantity(cartItemId, quantity) {
  const itemId = Number(cartItemId);
  updateQuantity(itemId, parseInt(quantity) || 1);
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  
  // Detect current page and render accordingly
  if (document.getElementById('products-grid')) {
    const category = document.body.getAttribute('data-category');
    if (category) renderProductGrid(category);
  }
  
  if (document.getElementById('product-detail-container')) {
    const productId = getProductIdFromURL();
    if (productId) renderProductDetail(productId);
  }
  
  if (document.getElementById('cart-container')) {
    renderCart();
  }
});
