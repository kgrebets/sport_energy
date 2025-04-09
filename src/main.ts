import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { FilterHtmlGenerator } from "./html-gererators/filter-html-generator";
import { FilterService } from "./services/filter-service";

//#region Load filters

const container = document.querySelector('.filters-output');

if (!container) throw new Error("Can't find filters-output");

function loadFilters(filterType: string, page: number) {
const limit = 12;
FilterService.getFilters(filterType, page, limit)
    .then(response => {
      const html = FilterHtmlGenerator.generateFiltersHtml(response.results);
      container.innerHTML = html;
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

const tabs = document.querySelectorAll('.filter-tabs li');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const newFilter = tab.dataset.filter;

    if (!newFilter || newFilter === currentFilter) return;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    currentFilter = newFilter;
    currentPage = 1;

    loadFilters(currentFilter, currentPage);
  });
});


let currentFilter = tabs[0].dataset.filter;;
let currentPage = 1;

loadFilters(currentFilter, currentPage);

//#endregion