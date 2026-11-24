const cartCount = document.querySelector('#cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const year = document.querySelector('#year');
const themeToggle = document.querySelector('#theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeColor.setAttribute('content', isDark ? '#252a25' : '#f5f4ed');
}

applyTheme(localStorage.getItem('wavy-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('wavy-theme', nextTheme);
  applyTheme(nextTheme);
});

let itemCount = Number.parseInt(localStorage.getItem('wavy-cart-count') || '0', 10);

cartCount.textContent = itemCount;
year.textContent = new Date().getFullYear();

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    itemCount += 1;
    cartCount.textContent = itemCount;
    localStorage.setItem('wavy-cart-count', String(itemCount));

    button.textContent = 'Added';
    window.setTimeout(() => {
      button.textContent = 'Add to bag';
    }, 1000);
  });
});
