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

  renderFavorites(loadFavorites(), favoritesOutputContainer);
}
