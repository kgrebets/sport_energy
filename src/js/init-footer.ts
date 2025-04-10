import { showErrorMessage, showSuccessMessage } from './utils/toasts';
import { makePostRequest } from './services/request';
import { SubscriptionRequest } from './types/request.types';

export function initFooter() {
  const form = document.getElementById('subscription-form') as HTMLFormElement;

  const footerYearElement = document.querySelector('.footer-year p');
  if (footerYearElement) {
    footerYearElement.textContent = `©${new Date().getFullYear()}`;
  }

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
      const response = await makePostRequest<SubscriptionRequest, void>(
        'subscription',
        { email }
      );

      if (response === undefined) {
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
