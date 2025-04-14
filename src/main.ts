import { initFilters } from './js/init-filter';
import { fetchQuote } from './js/quote';
import { initFooter } from './js/init-footer';
import { initExerciseEvents } from './js/modal-controller';
import { initScrollTop } from './js/init-scroll-top';

initFilters();
fetchQuote();
initFooter();

const exercisesContainer = document.querySelector('.exercises-content');
if (exercisesContainer instanceof HTMLElement) {
  initExerciseEvents(exercisesContainer);
}

initScrollTop();