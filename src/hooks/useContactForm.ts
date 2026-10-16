import { useEffect, useState } from 'react';
import { buildMailtoUrl } from '../lib/contact';
import { validateContactForm } from '../lib/validation';
import type { ContactFormState, ContactFormValues } from '../types/portfolio';

type ContactField = keyof ContactFormValues;
type OpenMailto = (url: string) => void;

const initialValues: ContactFormValues = { name: '', email: '', message: '' };

function defaultOpenMailto(url: string): void {
  window.location.assign(url);
}

function useContactForm(email: string, openMailto: OpenMailto = defaultOpenMailto) {
  const [state, setState] = useState<ContactFormState>({ status: 'idle', values: initialValues, errors: {} });

  useEffect(() => {
    if (state.status !== 'invalid') {
      return;
    }

    const contactFields: ContactField[] = ['name', 'email', 'message'];
    const firstErrorField = contactFields.find((field) => state.errors[field]);
    if (firstErrorField) {
      document.getElementById(`contact-${firstErrorField}`)?.focus();
    }
  }, [state]);

  const updateField = (field: ContactField, value: string): void => {
    setState((currentState) => ({
      status: 'idle',
      values: { ...currentState.values, [field]: value },
      errors: {},
    }));
  };

  const submit = (): void => {
    setState((currentState) => {
      const errors = validateContactForm(currentState.values);
      if (Object.keys(errors).length > 0) {
        return { status: 'invalid', values: currentState.values, errors };
      }

      try {
        openMailto(buildMailtoUrl(email, currentState.values));
        return {
          status: 'success',
          values: currentState.values,
          errors: {},
          message: 'Seu cliente de e-mail foi solicitado. A entrega depende dele.',
        };
      } catch {
        return {
          status: 'error',
          values: currentState.values,
          errors: { form: 'Não foi possível abrir o cliente de e-mail. Use o endereço direto abaixo.' },
          message: 'Não foi possível abrir o cliente de e-mail. Use o endereço direto abaixo.',
        };
      }
    });
  };

  const resetStatus = (): void => {
    setState((currentState) => ({ status: 'idle', values: currentState.values, errors: {} }));
  };

  return { state, updateField, submit, resetStatus };
}

export default useContactForm;