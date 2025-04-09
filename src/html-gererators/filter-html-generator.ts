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