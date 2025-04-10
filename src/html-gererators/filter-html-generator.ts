import { FilterResponse } from "../js/types/response.types";

export function generateFiltersHtml(items: FilterResponse[]) {
  return items.map(item => `
          <li class="filter-card">
            <img src="${item.imgURL}" alt="${item.name}" />
            <div class="filter-info">
              <div class="filter-name">${item.name}</div>
              <div class="filter-type">${item.filter}</div>
            </div>
          </li>
        `)
    .join('');
}

export function generatePaginationHtml(totalPages: number, currentPage: number): string {
  const pagesToShow: number[] = [];

  const maxVisible = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let page = startPage; page <= endPage; page++) {
    pagesToShow.push(page);
  }

  return pagesToShow.map(page => `
    <li class="pagination-page${page === currentPage ? ' active' : ''}" data-page="${page}">${page}</li>
  `).join('');
}
