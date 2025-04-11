import { getFilters } from '../services/filter-service';
import { generateFiltersHtml, generatePaginationHtml } from '../html-gererators/filter-html-generator';
import { showErrorMessage } from './utils/toasts';
import { FilterType } from './types/general.types';
import { exercisesMarkup } from '../html-gererators/exercises-markup';
import { ExercisesRequest } from './types/request.types';
import { ExercisesResponse } from './types/response.types';
import { getExercises } from '../services/ exercises-service';

export function initFilters(): void {
  const filtersOutputContainer = document.querySelector('.filters-output') as HTMLElement;
  const tabsContainer = document.querySelector('.filter-tabs') as HTMLElement;
  const paginationContainer = document.querySelector('.filter-pagination') as HTMLElement;
  const exercisesListContainer = document.querySelector('.exercises-list') as HTMLElement;
  const exercisesPaginationContainer = document.querySelector('.exercises-pagination') as HTMLElement;

  if (!filtersOutputContainer) throw new Error('Can\'t find .filters-output');
  if (!tabsContainer) throw new Error('Can\'t find .filter-tabs');
  if (!paginationContainer) throw new Error('Can\'t find .filter-pagination');

  let currentFilter = (tabsContainer.querySelector('.active') as HTMLElement)?.dataset.filter as FilterType;
  let currentPage = 1;

  function loadFilters(filter: FilterType, page: number): void {
    const limit = 12;

    getFilters({ filter, page, limit })
      .then(response => {
        filtersOutputContainer.innerHTML = generateFiltersHtml(response.results);
        paginationContainer.innerHTML = generatePaginationHtml(response.totalPages, page);
        filtersOutputContainer.style.display = 'flex';
        paginationContainer.style.display = 'flex';
        exercisesListContainer.style.display = 'none';
        exercisesPaginationContainer.style.display = 'none';

        attachFilterCardClickHandlers();
      })
      .catch(error => showErrorMessage({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      }));
  }

  async function loadExercises(
    filterKey: string,
    filterValue: string,
    page: number,
  ): Promise<void> {
    if (!exercisesListContainer || !exercisesPaginationContainer) return;
    const limit = 10;
    const requestParams: Partial<ExercisesRequest> = {
      [filterKey]: filterValue,
      page,
      limit,
      keyword: '',
    };

    try {
      const response: ExercisesResponse = await getExercises(requestParams);
      const markup = response.results
        .map(ex =>
          exercisesMarkup(
            ex.rating,
            ex.name,
            `${ex.burnedCalories} kcal`,
            ex.bodyPart,
            ex.target,
            ex._id,
          ),
        )
        .join('');
      exercisesListContainer.innerHTML = markup;
      exercisesPaginationContainer.innerHTML = generatePaginationHtml(
        response.totalPages,
        response.page,
      );

      exercisesListContainer.style.display = 'flex';
      exercisesPaginationContainer.style.display = 'flex';

      attachExercisesPaginationHandlers(filterKey, filterValue);
    } catch (error: any) {
      showErrorMessage({
        title: 'Error',
        message: error?.message || 'Failed to load exercises',
        position: 'topRight',
      });
    }
  }

  function attachFilterCardClickHandlers(): void {
    const filterCards = filtersOutputContainer!.querySelectorAll('.filter-card');
    filterCards.forEach(card => {
      card.addEventListener('click', () => {
        const filterType = card.getAttribute('data-filter-type');
        const filterName = card.getAttribute('data-filter-name');
        if (!filterType || !filterName) return;
        currentPage = 1;

        let key: string;
        if (filterType === 'Muscles') {
          key = 'muscles';
        } else if (filterType === 'Body parts') {
          key = 'bodypart';
        } else if (filterType === 'Equipment') {
          key = 'equipment';
        } else {
          return;
        }

        if (filtersOutputContainer && paginationContainer) {
          filtersOutputContainer.innerHTML = '';
          filtersOutputContainer.style.display = 'none';
          paginationContainer.innerHTML = '';
          paginationContainer.style.display = 'none';
        }

        loadExercises(key, filterName.toLowerCase(), currentPage);
      });
    });
  }

  function attachExercisesPaginationHandlers(
    filterKey: string,
    filterValue: string
  ): void {
    const paginationPages =
      exercisesPaginationContainer!.querySelectorAll('.pagination-page');
    paginationPages.forEach(pageEl => {
      pageEl.addEventListener('click', () => {
        const newPage = Number(pageEl.getAttribute('data-page'));
        if (!newPage || newPage === currentPage) return;
        currentPage = newPage;
        loadExercises(filterKey, filterValue, currentPage);
      });
    });
  }

  tabsContainer.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() !== 'li') return;

    const newFilter = target.dataset.filter as FilterType;
    if (!newFilter || newFilter === currentFilter) return;

    tabsContainer.querySelectorAll('li').forEach(t => t.classList.remove('active'));
    target.classList.add('active');

    currentFilter = newFilter;
    currentPage = 1;

    loadFilters(currentFilter, currentPage);
  });

  paginationContainer.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() !== 'li') return;

    const newPage = Number(target.dataset.page);
    if (!newPage || newPage === currentPage) return;

    currentPage = newPage;
    loadFilters(currentFilter, currentPage);
  });

  loadFilters(currentFilter, currentPage);
}