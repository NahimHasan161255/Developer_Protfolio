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

const foodEntries = [
  {
    name: 'Biryani',
    country: 'India',
    region: 'asia',
    recipe: 'Cook basmati rice separately, layer it with spiced chicken or vegetables, add saffron, herbs, and cook on low heat until aromatic.',
    restaurant: 'Nizam’s Ki Biryani',
    location: 'Hyderabad, India',
    price: '$12–$20',
    description: 'A fragrant rice dish layered with aromatic spices and slow-cooked meat or vegetables.'
  },
  {
    name: 'Sushi',
    country: 'Japan',
    region: 'asia',
    recipe: 'Prepare seasoned rice, add fresh fish or vegetables, and shape with nori, soy sauce, and wasabi for a clean, delicate bite.',
    restaurant: 'Sushi Yasuda',
    location: 'Tokyo, Japan',
    price: '$25–$60',
    description: 'A refined Japanese classic built around vinegared rice and expertly prepared seafood.'
  },
  {
    name: 'Pho',
    country: 'Vietnam',
    region: 'asia',
    recipe: 'Simmer beef bones or vegetable stock with star anise, cinnamon, onion, and ginger, then serve with rice noodles and herbs.',
    restaurant: 'Pho 24',
    location: 'Ho Chi Minh City, Vietnam',
    price: '$8–$15',
    description: 'A comforting Vietnamese noodle soup with fragrant broth and delicate herbs.'
  },
  {
    name: 'Peking Duck',
    country: 'China',
    region: 'asia',
    recipe: 'Dry the duck, roast until crisp, and serve with thin pancakes, cucumber, scallions, and hoisin sauce.',
    restaurant: 'Quanjude',
    location: 'Beijing, China',
    price: '$20–$35',
    description: 'Crispy roasted duck served with pancakes and rich dipping sauces.'
  },
  {
    name: 'Kimchi',
    country: 'South Korea',
    region: 'asia',
    recipe: 'Ferment napa cabbage with chili paste, garlic, ginger, and scallions for a spicy, tangy bite.',
    restaurant: 'Gwangjang Market',
    location: 'Seoul, South Korea',
    price: '$5–$12',
    description: 'A beloved Korean side dish known for its bold flavor and probiotic fermentation.'
  },
  {
    name: 'Paella',
    country: 'Spain',
    region: 'europe',
    recipe: 'Sauté rice with saffron, seafood or meat, vegetables, and stock until the bottom develops a toasted socarrat layer.',
    restaurant: 'La Fonda',
    location: 'Valencia, Spain',
    price: '$18–$30',
    description: 'A celebratory Spanish rice dish with saffron, vegetables, and savory proteins.'
  },
  {
    name: 'Pizza',
    country: 'Italy',
    region: 'europe',
    recipe: 'Stretch fresh dough, add tomato sauce, mozzarella, olive oil, and top with favorite ingredients before baking at high heat.',
    restaurant: 'Da Enzo',
    location: 'Naples, Italy',
    price: '$14–$28',
    description: 'A beloved Italian staple known for thin crust, rich tomato sauce, and perfect cheese melt.'
  },
  {
    name: 'Pasta Carbonara',
    country: 'Italy',
    region: 'europe',
    recipe: 'Toss spaghetti with eggs, pecorino, black pepper, and crispy pancetta until creamy and glossy.',
    restaurant: 'Trattoria Romana',
    location: 'Rome, Italy',
    price: '$16–$24',
    description: 'An iconic Roman pasta made with eggs, pecorino, and guanciale.'
  },
  {
    name: 'Tacos',
    country: 'Mexico',
    region: 'americas',
    recipe: 'Warm tortillas, fill with grilled meat or beans, then add salsa, onion, cilantro, and lime.',
    restaurant: 'Taquería El Huequito',
    location: 'Mexico City, Mexico',
    price: '$9–$18',
    description: 'A Mexican street-food favorite with endless fillings and colorful toppings.'
  },
  {
    name: 'Burger',
    country: 'United States',
    region: 'americas',
    recipe: 'Grill a seasoned beef patty, stack with cheese, lettuce, tomato, onions, and sauces on a toasted bun.',
    restaurant: 'Shake Shack',
    location: 'New York, United States',
    price: '$10–$18',
    description: 'A comforting American classic loved for its juicy bite and customizable toppings.'
  },
  {
    name: 'Jollof Rice',
    country: 'Nigeria',
    region: 'africa',
    recipe: 'Cook tomato, pepper, and spice base into rice until rich, smoky, and full of savory flavor.',
    restaurant: 'Bungalow Restaurant',
    location: 'Lagos, Nigeria',
    price: '$8–$17',
    description: 'A vibrant West African rice dish known for its bold tomato-spice flavor.'
  },
  {
    name: 'Falafel',
    country: 'Egypt',
    region: 'africa',
    recipe: 'Blend chickpeas with herbs and spices, shape into patties, then deep-fry until crisp outside and soft inside.',
    restaurant: 'Abu El Sid',
    location: 'Cairo, Egypt',
    price: '$7–$14',
    description: 'A crispy, savory Middle Eastern favorite often served in wraps or with salads.'
  }
];

const foodDirectory = document.getElementById('food-directory');

function renderFoodDirectory(filter = 'all') {
  if (!foodDirectory) return;

  const filtered = filter === 'all'
    ? foodEntries
    : foodEntries.filter((item) => item.region === filter);

  foodDirectory.innerHTML = filtered.map((item) => `
    <article class="food-country-card">
      <div class="food-card-header">
        <span class="food-country">${item.country}</span>
        <span class="food-price">${item.price}</span>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <ul class="food-meta-list">
        <li><strong>Restaurant:</strong> ${item.restaurant}</li>
        <li><strong>Location:</strong> ${item.location}</li>
        <li><strong>Recipe:</strong> ${item.recipe}</li>
      </ul>
    </article>
  `).join('');
}

document.querySelectorAll('.food-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.food-filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderFoodDirectory(button.dataset.foodFilter);
  });
});

renderFoodDirectory();

const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

function addChatMessage(text, type = 'bot') {
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = text;
  chatbotMessages.appendChild(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getFoodAnswer(question) {
  const q = question.toLowerCase();

  const matchedFood = foodEntries.find((item) => q.includes(item.name.toLowerCase()));
  if (matchedFood) {
    if (q.includes('recipe') || q.includes('how to cook') || q.includes('make')) {
      return `${matchedFood.name} is famous in ${matchedFood.country}. Recipe: ${matchedFood.recipe}`;
    }

    if (q.includes('restaurant') || q.includes('where to eat') || q.includes('eat') || q.includes('location')) {
      return `${matchedFood.name} is famously served at ${matchedFood.restaurant} in ${matchedFood.location}.`;
    }

    if (q.includes('price') || q.includes('cost') || q.includes('how much')) {
      return `The usual price range for ${matchedFood.name} is ${matchedFood.price}.`;
    }

    return `${matchedFood.name} is a popular dish from ${matchedFood.country}. It is known for ${matchedFood.description.toLowerCase()} The famous restaurant is ${matchedFood.restaurant} in ${matchedFood.location}.`;
  }

  if (q.includes('japan') || q.includes('japanese')) {
    return 'Japan is famous for sushi, ramen, and katsu curry. Sushi is one of the most iconic dishes and is often served in Tokyo and Osaka.';
  }

  if (q.includes('italy') || q.includes('italian')) {
    return 'Italy is famous for pizza, pasta carbonara, and risotto. Pizza from Naples and pasta from Rome are especially iconic.';
  }

  if (q.includes('india') || q.includes('indian')) {
    return 'India is famous for biryani, butter chicken, and masala dosa. Biryani is especially popular in Hyderabad.';
  }

  if (q.includes('restaurant') || q.includes('where should i eat') || q.includes('good place')) {
    return 'Some top recommendations include Nizam’s Ki Biryani in Hyderabad, Sushi Yasuda in Tokyo, and La Fonda in Valencia.';
  }

  if (q.includes('recipe') || q.includes('how to make')) {
    return 'You can start by asking about a specific dish, such as biryani, sushi, tacos, or paella, and I will give you a simple recipe.';
  }

  if (q.includes('price') || q.includes('cheap') || q.includes('expensive')) {
    return 'Food prices vary by city, but many popular dishes in this guide range from about $5 to $60 depending on location and restaurant.';
  }

  return 'I can help with famous dishes, recipes, restaurant names, locations, and price ranges. Try asking about sushi, biryani, pizza, or “where to eat tacos”.';
}

if (chatbotForm && chatbotInput && chatbotMessages) {
  chatbotForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = chatbotInput.value.trim();

    if (!question) return;

    addChatMessage(question, 'user');
    chatbotInput.value = '';

    const answer = getFoodAnswer(question);
    setTimeout(() => addChatMessage(answer, 'bot'), 250);
  });
}

