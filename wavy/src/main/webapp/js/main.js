const cartCount = document.querySelector('#cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const year = document.querySelector('#year');

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
