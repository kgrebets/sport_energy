import { Exercise } from "./types/general.types";
import { renderExerciseCard } from "./services/rendering";
import { renderFavorites } from "./services/rendering";

export function initFavorites(): void {
  const favoritesOutputContainer = document.querySelector('.exercises-content') as HTMLElement;

  function loadFavorites(): Exercise[] {
    try {
      const favoritesData = JSON.parse(localStorage.getItem('favorites') || '[]') as Exercise[];
      return favoritesData;

    } catch (error) {
      return [];
    }
  }

  function deleteFavorite(id: string): void {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as Exercise[];
    const updatedFavorites = storedFavorites.filter(exercise => exercise._id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    renderFavorites(updatedFavorites, favoritesOutputContainer);
    attachDeleteListeners();
  }

  function attachDeleteListeners(): void {
    const trashButtons = favoritesOutputContainer.querySelectorAll<HTMLButtonElement>(
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

  renderFavorites(loadFavorites(), favoritesOutputContainer);
    attachDeleteListeners();



}

