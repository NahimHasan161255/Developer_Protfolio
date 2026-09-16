const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

const closeMenu = () => {
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const modal = document.querySelector('.project-modal');
const modalImage = modal.querySelector('img');
const modalTitle = modal.querySelector('#modal-title');
const modalClose = modal.querySelector('.modal-close');

const closeModal = () => {
  modal.close();
  document.body.classList.remove('modal-open');
};

document.querySelectorAll('.project-image').forEach((project) => {
  project.addEventListener('click', () => {
    modalImage.src = project.dataset.image;
    modalImage.alt = project.dataset.title;
    modalTitle.textContent = project.dataset.title;
    modal.showModal();
    document.body.classList.add('modal-open');
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));