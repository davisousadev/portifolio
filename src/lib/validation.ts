import type { ContactFormErrors, ContactFormValues } from '../types/portfolio';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 1 || name.length > 120) {
    errors.name = 'Informe seu nome usando entre 1 e 120 caracteres.';
  }

  if (email.length < 1 || email.length > 254 || !emailPattern.test(email)) {
    errors.email = 'Informe um e-mail válido.';
  }

  if (message.length < 10 || message.length > 4000) {
    errors.message = 'A mensagem deve ter entre 10 e 4000 caracteres.';
  }

  return errors;
}

export function isContactFormValid(values: ContactFormValues): boolean {
  return Object.keys(validateContactForm(values)).length === 0;
}