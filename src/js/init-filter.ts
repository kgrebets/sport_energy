import { getFilters } from '../services/filter-service';
import { generateFiltersHtml, generatePaginationHtml } from '../html-gererators/filter-html-generator';
import { showErrorMessage } from './utils/toasts';
import { FilterType } from './types/general.types';

export function initFilters() {
    const filtersOutputContainer = document.querySelector('.filters-output');
    const tabsContainer = document.querySelector('.filter-tabs');
    const paginationContainer = document.querySelector('.filter-pagination');

    if (!filtersOutputContainer) throw new Error("Can't find .filters-output");
    if (!tabsContainer) throw new Error("Can't find .filter-tabs");
    if (!paginationContainer) throw new Error("Can't find .filter-pagination");

    let currentFilter = (tabsContainer.querySelector('.active') as HTMLElement)?.dataset.filter as FilterType;
    let currentPage = 1;

    function loadFilters(filter: FilterType, page: number) {
        const limit = 12;

        getFilters({ filter, page, limit })
            .then(response => {
                filtersOutputContainer.innerHTML = generateFiltersHtml(response.results);
                paginationContainer.innerHTML = generatePaginationHtml(response.totalPages, page);
            })
            .catch(error => showErrorMessage({
                title: 'Error',
                message: error.message,
                position: 'topRight',
                timeout: 5000
            }));
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
        if (target.tagName.toLowerCase() !== 'span') return;

        const newPage = Number(target.dataset.page);
        if (!newPage || newPage === currentPage) return;

        currentPage = newPage;
        loadFilters(currentFilter, currentPage);
    });

    loadFilters(currentFilter, currentPage);
}