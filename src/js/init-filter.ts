import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { FilterHtmlGenerator } from '../html-gererators/filter-html-generator';
import { FilterService } from '../services/filter-service';

export function initFilters() {

    const filtersOutputContainer = document.querySelector('.filters-output');
    const tabsContainer = document.querySelector('.filter-tabs');

    if (!filtersOutputContainer) throw new Error("Can't find .filters-output");
    if (!tabsContainer) throw new Error("Can't find .filter-tabs");

    let currentFilter = (tabsContainer.querySelector('.active') as HTMLElement)?.dataset.filter || 'Muscles';
    let currentPage = 1;

    function loadFilters(filterType: string, page: number) {
        const limit = 12;

        FilterService.getFilters(filterType, page, limit)
            .then(response => {
                const html = FilterHtmlGenerator.generateFiltersHtml(response.results);
                filtersOutputContainer.innerHTML = html;
            })
            .catch(error => {
                iziToast.error({
                    title: 'Error',
                    message: error.message,
                    position: 'topRight',
                    timeout: 5000
                });
            });
    }

    tabsContainer.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target.tagName.toLowerCase() !== 'li') return;

        const newFilter = target.dataset.filter;
        if (!newFilter || newFilter === currentFilter) return;

        tabsContainer.querySelectorAll('li').forEach(t => t.classList.remove('active'));
        target.classList.add('active');

        currentFilter = newFilter;
        currentPage = 1;

        loadFilters(currentFilter, currentPage);
    });

    loadFilters(currentFilter, currentPage);
}