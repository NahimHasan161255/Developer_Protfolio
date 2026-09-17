const today = new Date();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
const monthDay = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const eyebrow = document.querySelector('.eyebrow');
if (eyebrow) {
  eyebrow.textContent = `${dayName}, ${monthDay}`;
}

const searchInput = document.getElementById('patient-search');
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('tbody tr[data-name]').forEach((row) => {
      const name = row.dataset.name.toLowerCase();
      const matches = name.includes(query);
      row.classList.toggle('hide-row', !matches);
    });
  });
}
