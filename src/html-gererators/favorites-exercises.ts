import { Exercise } from '../js/types/general.types';
import { capitalizeFirstLetter } from '../js/utils/capitalizeFirstLetter';

export function renderExerciseCard(exercise: Exercise): string {
  const capitalizedName = capitalizeFirstLetter(exercise.name);
  const spriteBasePath = `${import.meta.env.BASE_URL}img/sprite.svg`;
  return `
<li class="exercises-category-tile-item">
                  <div class="exercises-category-tile-top">
                    <div class="exercises-category-tile-top-wrapper">
                    <span class="exercises-category-tile-badge">WORKOUT</span>
                    <button class="exercises-category-tile-button-delete" aria-label="Remove from favorites" data-id="${exercise._id}" data-modal-ignore>
                      <svg class="icon" width="20" height="20">
                        <use href="${spriteBasePath}#trash"></use>
                      </svg>
                    </button>
                    </div>
                    <div class="exercises-category-tile-top-wrapper">
                    <button class="exercises-category-tile-button-start" aria-label="Start workout" data-id="${exercise._id}">
                     <span class="exercises-category-tile-start">Start</span>
                      <svg class="icon" width="20" height="20">
                        <use href="${spriteBasePath}#arrow-right"></use>
                      </svg>
                    </button>
                    </div>

                  </div>

                  <div class="exercises-category-tile-middle">
                    <div class="exercises-category-tile-man-icon-container">
                      <svg class="exercises-category-tile-man-icon" width="24" height="24">
                        <use href="${spriteBasePath}#running"></use>
                      </svg>
                    </div>
                    <h3 class="exercise-name">${capitalizedName}</h3>
                  </div>

                  <div class="exercises-category-tile-bottom">
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Burned calories:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.burnedCalories} / ${exercise.time} min</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Body part:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.bodyPart}</span>
                    </div>
                    <div class="exercises-category-tile-bottom-item">
                      <span class="exercises-category-tile-bottom-title">Target:</span>
                      <span class="exercises-category-tile-bottom-value">${exercise.target}</span>
                    </div>
                  </div>
                </li>
    `;
}
