const year = new Date().getFullYear();
const footerLinks = document.querySelector('.footer-links');

if (footerLinks) {
  const note = document.createElement('span');
  note.textContent = `© ${year}`;
  note.style.color = '#586a7d';
  footerLinks.appendChild(note);
}

const cartCountEl = document.getElementById('cart-count');
let cartCount = 0;

if (cartCountEl) {
  cartCountEl.textContent = String(cartCount);
}

document.querySelectorAll('[data-add-cart]').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    if (cartCountEl) {
      cartCountEl.textContent = String(cartCount);
    }
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.7';
  });
});

document.querySelectorAll('.shop-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.shop-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});
