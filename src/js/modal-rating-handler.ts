// src/js/modal-rating-handler.ts
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
      const rating = parseFloat(document.querySelector('.rating-value')!.textContent!);
      const payload = {
        email: formData.get('email'),
        comment: formData.get('comment'),
        rating,
        exerciseId,
      };
  
      try {
        const res = await fetch('/api/rating', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
        });
  
        if (!res.ok) throw new Error('Failed to send rating');
  
        form.closest('.modal-backdrop')?.remove();
        // Після відправки — відкриваємо назад модалку вправи
        // Тут повинен бути re-fetch вправи і знову initExerciseModal()
      } catch (err: any) {
        alert(err.message || 'Unknown error');
      }
    });
  }
  