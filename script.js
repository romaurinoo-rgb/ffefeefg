const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

// открыть корзину
cartBtn.onclick = () => cartModal.style.display = 'flex';
closeCart.onclick = () => cartModal.style.display = 'none';
window.onclick = e => { if (e.target === cartModal) cartModal.style.display = 'none'; };

// добавить в корзину
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', e => {
    const product = e.target.closest('.product');
    const name = product.querySelector('h3').innerText;
    const priceText = product.querySelector('.price').innerText.replace(/[₸\s]/g, '');
    const price = parseInt(priceText);
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} <strong>₸${item.price.toLocaleString()}</strong>
      <button onclick="removeItem(${i})">×</button>`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = '₸' + total.toLocaleString();
}

window.removeItem = function(index) {
  cart.splice(index, 1);
  updateCart();
};

document.getElementById('checkout').onclick = () => {
  if (!cart.length) return alert('Корзина пуста!');
  alert('Спасибо за покупку!');
  cart = [];
  updateCart();
  cartModal.style.display = 'none';
};
