document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector(
    '.burger'
  ) as HTMLButtonElement | null;
  const mobileMenu = document.querySelector(
    '.mobile-menu'
  ) as HTMLElement | null;
  const closeButton = document.querySelector(
    '.mobile-menu__close'
  ) as HTMLButtonElement | null;
  const overlay = document.querySelector(
    '.mobile-menu__overlay'
  ) as HTMLElement | null;

  if (!burgerButton || !mobileMenu || !closeButton || !overlay) return;

  const openMobileMenu = () => {
    mobileMenu.classList.add('mobile-menu--open');
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('mobile-menu--open');
  };

  burgerButton.addEventListener('click', openMobileMenu);
  closeButton.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  // -> ACTIVE SWITCH
  const homeLinkDesktop = document.querySelector(
    '.main-nav .home-link'
  ) as HTMLAnchorElement | null;
  const favoritesLinkDesktop = document.querySelector(
    '.main-nav .favorites-link'
  ) as HTMLAnchorElement | null;

  const setActiveLink = () => {
    const currentPage = window.location.pathname;

    if (homeLinkDesktop && favoritesLinkDesktop) {
      homeLinkDesktop.classList.remove('active-oval');
      favoritesLinkDesktop.classList.remove('active-oval');

      if (currentPage === '/index.html' || currentPage === '/') {
        homeLinkDesktop.classList.add('active-oval');
      } else if (currentPage === '/favorites.html') {
        favoritesLinkDesktop.classList.add('active-oval');
      }
    }
  };
  setActiveLink();
  window.addEventListener('popstate', setActiveLink);
});
