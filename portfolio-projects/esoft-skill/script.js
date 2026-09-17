const year = new Date().getFullYear();
const footerLinks = document.querySelector('.footer-links');

if (footerLinks) {
  const note = document.createElement('span');
  note.textContent = `© ${year}`;
  note.style.color = '#596c88';
  footerLinks.appendChild(note);
}

document.querySelectorAll('.course-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.course-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    document.querySelectorAll('.course-card').forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});
