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
const modalDescription = modal.querySelector('#modal-description');
const modalTags = modal.querySelector('#modal-tags');
const modalLive = modal.querySelector('#modal-live');
const modalGithub = modal.querySelector('#modal-github');
const modalClose = modal.querySelector('.modal-close');

const closeModal = () => {
  modal.close();
  document.body.classList.remove('modal-open');
};

document.querySelectorAll('.project-image').forEach((project) => {
  project.addEventListener('click', () => {
    const card = project.closest('.project-card');
    const info = card?.querySelector('.project-info');
    const title = project.dataset.title || info?.querySelector('h3')?.textContent || 'Project';
    const description = info?.querySelector('p')?.textContent || 'Project overview';
    const tagItems = Array.from(info?.querySelectorAll('.tag-list span') || []);
    const projectLinks = Array.from(card?.querySelectorAll('.project-links a') || []);

    modalImage.src = project.dataset.image;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modalTags.innerHTML = '';
    tagItems.forEach((tag) => {
      const item = document.createElement('span');
      item.textContent = tag.textContent.trim();
      modalTags.appendChild(item);
    });

    const liveHref = projectLinks[0]?.href || '#';
    const githubHref = projectLinks[1]?.href || '#';
    modalLive.href = liveHref;
    modalGithub.href = githubHref;

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