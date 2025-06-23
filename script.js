document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburguesa
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('active');
    });
  }

  // Banner de cookies
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');

  if (cookieBanner && acceptCookiesBtn) {
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'flex';
    }

    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  }
});
