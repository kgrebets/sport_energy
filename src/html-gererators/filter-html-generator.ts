import { FilterItem } from "../models/filter-tem";

export function generateFiltersHtml(items: FilterItem[]) {
  return items.map(item => `
          <div class="filter-card">
            <img src="${item.imgUrl}" alt="${item.name}" />
            <div class="filter-info">
              <div class="filter-name">${item.name}</div>
              <div class="filter-type">${item.filter}</div>
            </div>
          </div>
        `)
    .join('');
}

export function generatePaginationHtml(totalPages: number, currentPage: number): string {
  const pagesToShow: number[] = [];

  pagesToShow.push(1);
  if (totalPages >= 2) pagesToShow.push(2);
  if (totalPages >= 3) pagesToShow.push(3);

  return pagesToShow.map(page => `
    <span class="pagination-page${page === currentPage ? ' active' : ''}" data-page="${page}">${page}</span>
  `).join('');
}