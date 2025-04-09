import { showErrorMessage, showSuccessMessage } from './utils/toasts';

export function initFooter() {
  const form = document.getElementById('subscription-form') as HTMLFormElement;

  if (!form) {
    return;
  }

  form.addEventListener('submit', handleSubscriptionSubmit);

  async function handleSubscriptionSubmit(event: Event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email') as string;

    if (!email || !isValidEmail(email)) {
      showErrorMessage({
        title: 'Error',
        message: 'Please enter a valid email address',
        position: 'topRight',
      });
      return;
    }

    try {
      const response = await fetch(
        'https://your-energy.b.goit.study/api/subscription',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      form.reset();

      showSuccessMessage({
        title: 'Success',
        message: 'Thank you for subscribing!',
        position: 'topRight',
      });
    } catch (error) {
      showErrorMessage({
        title: 'Error',
        message: 'Failed to subscribe. Please try again later.',
        position: 'topRight',
      });
    }
  }

  function isValidEmail(email: string): boolean {
    const emailPattern = /^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }
}
