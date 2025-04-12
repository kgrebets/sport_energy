// src/js/modal-controller.ts

import {
  generateExerciseModal,
  generateRatingModal,
} from '../html-gererators/modal-generators';
import { ExerciseResponse } from '../js/types/response.types';
import { setupRatingStars, setupFormSubmit } from './modal-rating-handler';
import { getExerciseById } from '../services/ exercises-service';
import { favoritesService } from '../services/favorites-service';

export function initExerciseEvents(container: HTMLElement) {
  container.addEventListener('click', async e => {
    const target = e.target as HTMLElement;

    const isInteractiveElement = target.closest(
      'a, input, select, textarea, [data-modal-ignore]'
    );
    if (isInteractiveElement) {
      return;
    }

    const button = target.closest('.exercises-category-tile-button, .exercises-category-tile-button-start') as HTMLElement;
    if (!button) return;

    const id = button.getAttribute('data-id');
    if (!id) return;

    const exercise = await getExerciseById(id);
    if (exercise) {
      initExerciseModal(exercise);
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

  document.getElementById('fav-btn')?.addEventListener('click', () => {
    favoritesService.toggleFavorite(exercise._id);
    closeModal();
  });
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
