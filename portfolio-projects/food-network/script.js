const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');
const cartCountEl = document.getElementById('cart-count');
let cartCount = 0;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (cartCountEl) {
  cartCountEl.textContent = String(cartCount);
}

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
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

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    document.querySelectorAll('.dish-card').forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});
