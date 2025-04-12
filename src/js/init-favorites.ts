import { Exercise } from './types/general.types';
import { YOUR_ENERGY_API_URL } from './constants/general';
import { renderExerciseCard } from '../html-gererators/favorites-exercises';
import { favoritesService } from '../services/favorites-service';

export function initFavorites(): void {
  const favoritesOutputContainer = document.querySelector(
    '.exercises-content'
  ) as HTMLElement;
  if (!favoritesOutputContainer) return;

  async function fetchExerciseById(id: string): Promise<Exercise | null> {
    try {
      const res = await fetch(`${YOUR_ENERGY_API_URL}exercises/${id}`);
      if (!res.ok) throw new Error('Exercise not found');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch exercise with id ${id}:`, error);
      return null;
    }
  }

  function deleteFavorite(id: string): void {
    favoritesService.removeFavorite(id);
  }

  function attachDeleteListeners(): void {
    const trashButtons =
      favoritesOutputContainer.querySelectorAll<HTMLButtonElement>(
        '.exercises-category-tile-button-delete'
      );
    trashButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        if (!id) return;
        deleteFavorite(id);
      });
    });
  }

  async function loadAndRenderFavorites(): Promise<void> {
    const favoriteIds = favoritesService.getFavoriteIds();
    console.log(favoriteIds);

    const fetchPromises = favoriteIds.map(id => fetchExerciseById(id));
    const results = await Promise.all(fetchPromises);
    const validExercises = results.filter((ex): ex is Exercise => ex !== null);

    if (validExercises.length === 0) {
      favoritesOutputContainer.innerHTML = `
        <p class="no-favorites">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites for easier access in the future.
        </p>`;
      return;
    }

    const markup = validExercises.map(renderExerciseCard).join('');
    favoritesOutputContainer.innerHTML = `<ul class="exercises-list">${markup}</ul>`;
    attachDeleteListeners();
  }

  loadAndRenderFavorites();
}
