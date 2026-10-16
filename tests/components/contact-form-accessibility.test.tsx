import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';
import ContactForm from '../../src/components/ui/ContactForm';
import type { ContactFormState } from '../../src/types/portfolio';

expect.extend(toHaveNoViolations);

const state: ContactFormState = {
  status: 'invalid',
  values: { name: '', email: 'invalido', message: '' },
  errors: { name: 'Informe seu nome.', email: 'Informe um e-mail válido.', message: 'Informe uma mensagem.' },
};

describe('ContactForm accessibility', () => {
  it('associates errors and announces feedback', async () => {
    const { container } = render(<ContactForm state={state} onChange={() => undefined} onSubmit={() => undefined} onResetStatus={() => undefined} />);

    expect(container.querySelector('#contact-name-error')).toBeInTheDocument();
    expect(container.querySelector('[aria-live="polite"]')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});