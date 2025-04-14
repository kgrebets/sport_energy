import { fetchQuote } from './js/quote';
import { initFooter } from './js/init-footer';
import { initFavorites } from './js/init-favorites';
import { initExerciseEvents } from './js/modal-controller';
import { FAVORITES_UPDATED_EVENT } from './services/favorites-service';
import { initScrollTop } from './js/init-scroll-top';

fetchQuote();
initFavorites();
initFooter();

const favoritesContainer = document.querySelector('.favorites-list');
if (favoritesContainer instanceof HTMLElement) {
  initExerciseEvents(favoritesContainer);
}

document.addEventListener(FAVORITES_UPDATED_EVENT, () => {
  initFavorites();
});

initScrollTop();
