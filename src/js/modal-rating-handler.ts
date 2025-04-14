// src/js/modal-rating-handler.ts
import { makePatchRequest } from './services/request';
import { RatingRequest } from './types/request.types';
import { ExercisesResponse } from './types/response.types';
import { showSuccessMessage } from './utils/toasts';

export function setupRatingStars() {
  const stars = document.querySelectorAll('.star');
  const ratingValue = document.querySelector('.rating-value')!;
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = star.getAttribute('data-value')!;
      ratingValue.textContent = `${parseFloat(val).toFixed(1)}`;
      stars.forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-value')! <= val);
      });
    });
  });
}

export function setupFormSubmit(exerciseId: string) {
  const form = document.getElementById('rating-form') as HTMLFormElement;
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const rating = parseFloat(
      document.querySelector('.rating-value')!.textContent!
    );
    const payload = {
      rate: rating,
      email: formData.get('email') as string,
      review: formData.get('comment') as string,
    };

    try {
      const res = await makePatchRequest<RatingRequest, ExercisesResponse>(
        `exercises/${exerciseId}/rating`,
        payload
      );

      if (res) {
        showSuccessMessage({
          title: 'Success',
          message: 'Rating sent successfully',
          position: 'topRight',
        });
      }

      form.closest('.modal-backdrop')?.remove();
      // Після відправки — відкриваємо назад модалку вправи
      // Тут повинен бути re-fetch вправи і знову initExerciseModal()
    } catch (err: any) {
      console.error(err);
    }
  });
}
