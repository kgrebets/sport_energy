// src/js/modal-controller.ts

import {
  generateExerciseModal,
  generateRatingModal,
} from '../html-gererators/modal-generators';
import { ExerciseResponse } from '../js/types/response.types';
import { setupRatingStars, setupFormSubmit } from './modal-rating-handler';
import { getExerciseById } from '../services/ exercises-service';

export function initExerciseEvents(container: HTMLElement) {
  container.addEventListener('click', async e => {
    const target = e.target as HTMLElement;
    const li = target.closest('.exercises-category-tile-item') as HTMLElement;

    if (li) {
      const id = li.getAttribute('data-id');
      if (!id) return;

      const exercise = await getExerciseById(id);
      if (exercise) {
        initExerciseModal(exercise);
      }
    }
  });
}

export function initExerciseModal(exercise: ExerciseResponse) {
  const modalHTML = generateExerciseModal(exercise);
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document
    .querySelector('[data-modal-close]')
    ?.addEventListener('click', closeModal);
  document
    .getElementById('exercise-modal-backdrop')
    ?.addEventListener('click', e => {
      if ((e.target as HTMLElement).id === 'exercise-modal-backdrop')
        closeModal();
    });
  document.addEventListener('keydown', escHandler);

  document
    .getElementById('fav-btn')
    ?.addEventListener('click', () => toggleFavorite(exercise._id));
  document.getElementById('rate-btn')?.addEventListener('click', () => {
    closeModal();
    openRatingModal(exercise._id);
  });
}

function openRatingModal(exerciseId: string) {
  const modalHTML = generateRatingModal();
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document
    .querySelector('[data-modal-close]')
    ?.addEventListener('click', closeModal);
  document
    .getElementById('rating-modal-backdrop')
    ?.addEventListener('click', e => {
      if ((e.target as HTMLElement).id === 'rating-modal-backdrop')
        closeModal();
    });
  document.addEventListener('keydown', escHandler);

  setupRatingStars();
  setupFormSubmit(exerciseId);
}

function escHandler(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal();
}

function closeModal() {
  document.querySelector('.modal-backdrop')?.remove();
  document.removeEventListener('keydown', escHandler);
}

function toggleFavorite(id: string) {
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favs.indexOf(id);
  if (index !== -1) {
    favs.splice(index, 1);
  } else {
    favs.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
  closeModal();
  // optionally rerender UI
}
