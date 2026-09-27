const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Read customization values passed by the builder in the URL.
window.ClientData = {
  all() {
    const params = new URLSearchParams(window.location.search);
    const read = (key, fallback = '') => params.get(key) || fallback;
    return {
      name: read('name'), tagline: read('tagline'), description: read('description'),
      phone: read('phone'), email: read('email'), address: read('address'),
      hours: read('hours'), extra: read('extra')
    };
  }
};
