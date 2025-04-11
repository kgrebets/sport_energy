import { initFilters } from "./js/init-filter";
import { fetchQuote } from "./js/quote";
import { initFooter } from './js/init-footer';
import { initExerciseModal } from './js/modal-controller';
import { getExerciseById } from './services/ exercises-service';

initFilters();
fetchQuote();
initFooter();

document.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;
    const li = target.closest('.exercises-category-tile-item') as HTMLElement;
  
    if (li) {
      const id = li.getAttribute('data-id');
      if (!id) return;
  
      const exercise = await getExerciseById(id);
      if (exercise) {
        initExerciseModal(exercise);
      }
    }
  });
  
