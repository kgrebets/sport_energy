import { fetchQuote } from './js/quote';
import { initFooter } from './js/init-footer';
import { initFavorites } from './js/init-favorites';
import { initExerciseEvents } from './js/modal-controller';

fetchQuote();
initFavorites();
initFooter();

const favoritesContainer = document.querySelector('.favorites-list');
if (favoritesContainer instanceof HTMLElement) {
  initExerciseEvents(favoritesContainer);
}
