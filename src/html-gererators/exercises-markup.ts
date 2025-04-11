import { capitalizeFirstLetter } from '../js/utils/capitalizeFirstLetter';

export function filterMarkup(
  filter: string,
  name: string,
  imgURL: string
): string {
  return `
<li class="exercises-filter-tile-item" data-name="${name}" data-filter="${filter.toLowerCase()}">
  <div class="exercises-filter-tile-gradient"></div>
  <img class="exercises-filter-tile-img" src="${imgURL}" alt="${name}" onerror="this.onerror=null; this.src='./../img/no-image.jpg'"/>
  <div class="exercises-filter-tile-text-wrapper">
      <h3 class="exercises-filter-tile-headline">${capitalizeFirstLetter(name)}</h3>
     <p class="exercises-filter-tile-text">${filter}</p>
  </div>
</li>`;
}

export function exercisesMarkup(
  rating: number,
  name: string,
  burnedCalories: string,
  bodyPart: string,
  target: string,
  _id: string
): string {
  const iconId =
    bodyPart.toLowerCase() === 'cardio' ? 'running' : 'fluent-food';

  return `
<li class="exercises-category-tile-item" data-id="${_id}">
  <div class="exercises-category-tile-top">
    <div class="exercises-category-tile-workout-wrapper">
      <span class="exercises-category-tile-badge">
        WORKOUT
      </span>
      <div class="exercises-category-tile-rating-wrapper">
        <span class="exercises-category-tile-rating">${rating.toFixed(1)}</span>
        <svg class="exercises-category-tile-star-icon" width="16" height="16">
          <use href="./../img/sprite.svg#Star"></use>
        </svg>
      </div>
    </div>
    <button class="exercises-category-tile-button">
      Start
      <svg class="exercises-category-tile-arrow-icon" width="16" height="16">
        <use href="./../img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="exercises-category-tile-middle">
    <div class="exercises-category-tile-man-icon-container">
      <svg class="exercises-category-tile-man-icon" width="16" height="16">
        <use href="./../img/sprite.svg#${iconId}"></use>
      </svg>
    </div>
    <h3 class="exercises-category-tile-name">${name}</h3>
  </div>
  <ul class="exercises-category-tile-bottom">
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Burned calories:</span>
        <span class="exercises-category-tile-bottom-value">${burnedCalories}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Body part:</span>
        <span class="exercises-category-tile-bottom-value">${capitalizeFirstLetter(bodyPart)}</span>
      </li>
      <li class="exercises-category-tile-bottom-item">
        <span class="exercises-category-tile-bottom-title">Target:</span>
        <span class="exercises-category-tile-bottom-value">${capitalizeFirstLetter(target)}</span>
      </li>
  </ul>
</li>`;
}