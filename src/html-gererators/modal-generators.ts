import { ExerciseResponse } from '../js/types/response.types';
import { favoritesService } from '../services/favorites-service';
import { capitalizeFirstLetter } from '../js/utils/capitalizeFirstLetter';

export function generateExerciseModal(data: ExerciseResponse) {
  const capitalizedName = capitalizeFirstLetter(data.name);
  return `
    <div class="modal-backdrop" id="exercise-modal-backdrop">
      <div class="modal exercise-modal" id="exercise-modal">
        <button class="modal-close" data-modal-close>✕</button>
        <div class="modal-layout">
          <div class="modal-image">
            <img src="${data.gifUrl}" alt="${data.name}" />
          </div>
          <div class="modal-info">
            <h2 class="modal-title">${capitalizedName}</h2>

            <div class="modal-rating">
              <span class="rating-value">${data.rating.toFixed(1)}</span>
              <div class="stars">
                ${[1, 2, 3, 4, 5]
                  .map(
                    i =>
                      `<span class="star ${
                        i <= data.rating ? 'active' : ''
                      }">★</span>`
                  )
                  .join('')}
              </div>
            </div>

            <div class="modal-line"></div>

            <div class="modal-meta">
              <div>
                <span class="meta-label">Target</span>
                <strong>${data.target}</strong>
              </div>
              <div>
                <span class="meta-label">Body Part</span>
                <strong>${data.bodyPart}</strong>
              </div>
              <div>
                <span class="meta-label">Equipment</span>
                <strong>${data.equipment}</strong>
              </div>
              <div>
                <span class="meta-label">Popular</span>
                <strong>${data.popularity}</strong>
              </div>
            </div>

            <div class="modal-calories">
              <span class="meta-label">Burned calories</span>
              <strong>${data.burnedCalories}/${data.time} min</strong>
            </div>

            <div class="modal-line"></div>

            <p class="modal-description">${data.description}</p>

            <div class="modal-buttons">
              <button id="fav-btn" class="btn-white">${
                favoritesService.isFavorite(data._id)
                  ? 'Remove from favorites ♡'
                  : 'Add to favorites ♡'
              }</button>
              <button id="rate-btn" class="btn-black">Give a rating</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function generateRatingModal() {
  return `
      <div class="modal-backdrop" id="rating-modal-backdrop">
        <div class="rating-modal">
          <button class="modal-close" data-modal-close>✕</button>
          <form id="rating-form">
            <div class="rating-row">
              <label class="rating-label">Rating</label>
              <div class="rating-stars">
                <span class="rating-value">0.0</span>
                <div class="stars" id="stars">
                  ${[1, 2, 3, 4, 5]
                    .map(i => `<span class="star" data-value="${i}">★</span>`)
                    .join('')}
                </div>
              </div>
            </div>
  
            <input type="email" name="email" placeholder="Email" required pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"/>
            <textarea name="comment" placeholder="Your comment" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    `;
}
