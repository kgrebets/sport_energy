import { showErrorMessage, showSuccessMessage } from './utils/toasts';
import { makePostRequest } from './services/request';
import { SubscriptionRequest } from './types/request.types';

export function initFooter() {
  const form = document.getElementById('subscription-form') as HTMLFormElement;

  const footerYearElement = document.querySelector('.footer-year p');
  if (footerYearElement) {
    footerYearElement.textContent = `©${new Date().getFullYear()}`;
  }

  initExternalLinkSecurity();

  if (!form) {
    return;
  }

  form.addEventListener('submit', handleSubscriptionSubmit);

  function initExternalLinkSecurity(): void {
    const socialLinks = document.querySelectorAll('.footer-social-item a');

    socialLinks.forEach(link => {
      if (link instanceof HTMLAnchorElement) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        link.addEventListener('click', event => {
          if (!isValidExternalUrl(link.href)) {
            event.preventDefault();
            showErrorMessage({
              title: 'Security Warning',
              message:
                'This link appears to be suspicious and has been blocked.',
              position: 'topRight',
            });
          }
        });
      }
    });
  }

  function isValidExternalUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);

      const trustedDomains = [
        'facebook.com',
        'www.facebook.com',
        'instagram.com',
        'www.instagram.com',
        'youtube.com',
        'www.youtube.com',
        'youtu.be',
      ];

      const isDomainTrusted = trustedDomains.some(
        domain =>
          urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
      );

      const isSecureProtocol = urlObj.protocol === 'https:';

      return isDomainTrusted && isSecureProtocol;
    } catch (error) {
      return false;
    }
  }

  async function handleSubscriptionSubmit(event: Event): Promise<void> {
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
        { email },
        false
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
      if (error && 'status' in error && error.status === 409) {
        showErrorMessage({
          title: 'Error',
          message: 'You are already subscribed to our newsletter.',
          position: 'topRight',
        });
      } else {
        showErrorMessage({
          title: 'Error',
          message: 'Failed to subscribe. Please try again later.',
          position: 'topRight',
        });
      }
    }
  }

  function isValidEmail(email: string): boolean {
    const emailPattern = /^\w+(\.\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }
}
