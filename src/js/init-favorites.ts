import { Exercise } from './types/general.types';
import { YOUR_ENERGY_API_URL } from './constants/general';
import { renderExerciseCard } from '../html-gererators/favorites-exercises';
import { favoritesService } from '../services/favorites-service';

export function initFavorites(): void {
  function isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  function isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  function getItemsPerPage(): number {
    if (isTablet()) return 10;
    return 8;
  }

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

  function renderPagination(
    totalPages: number,
    currentPage: number,
    onPageChange: (page: number) => void
  ): HTMLElement {
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.classList.add('pagination-btn');
      if (i === currentPage) pageButton.classList.add('active');
      pageButton.textContent = i.toString();
      pageButton.dataset.page = i.toString();

      pageButton.addEventListener('click', () => onPageChange(i));

      paginationContainer.appendChild(pageButton);
    }

    return paginationContainer;
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

    let currentPage = 1;
    const itemsPerPage = getItemsPerPage();
    const totalPages = isDesktop()
      ? 1
      : Math.ceil(validExercises.length / itemsPerPage);

    const renderPage = (page: number): void => {
      currentPage = page;
      const start = (page - 1) * itemsPerPage;
      const visibleItems = isDesktop()
        ? validExercises
        : validExercises.slice(start, start + itemsPerPage);

      const markup = visibleItems.map(renderExerciseCard).join('');

      if (isDesktop()) {
        favoritesOutputContainer.innerHTML = `
          <div class="exercises-scroll-container">
            <ul class="exercises-list">${markup}</ul>
          </div>
        `;
      } else {
        favoritesOutputContainer.innerHTML = `<ul class="exercises-list">${markup}</ul>`;
        favoritesOutputContainer.appendChild(
          renderPagination(totalPages, currentPage, renderPage)
        );
      }

      attachDeleteListeners();
    };

    renderPage(currentPage);
  }

  loadAndRenderFavorites();
}
