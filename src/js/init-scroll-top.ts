export function initScrollTop() {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;

    if (window.scrollY > 200) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  document.getElementById('scrollToTopBtn')?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}