import { Exercise } from "./types/general.types";


export function initFavorites() {
    const favoritesOutputContainer = document.querySelector('.favorites-list');

    function loadFavorites(): Exercise[] {
        const favoritesData = JSON.parse(localStorage.getItem('favorites') || '[]') as Exercise[];
        return favoritesData;
    }

    

    function renderFavorites(favoritesData: Exercise[]) {
        if (!favoritesOutputContainer) return;
        if (favoritesData.length === 0) {
            return favoritesOutputContainer.insertAdjacentHTML(
                'beforeend',
                `<p class="no-favorites">
                   It appears that you haven't added any exercises to your favorites yet.
                   To get started, you can add exercises that you like to your favorites for easier access in the future.
                 </p>`
              );              
        };
    }

    renderFavorites(loadFavorites());
}