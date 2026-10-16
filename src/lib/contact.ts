import type { ContactFormValues } from '../types/portfolio';

export function buildMailtoUrl(email: string, values: ContactFormValues): string {
  const subject = `Contato de ${values.name.trim()}`;
  const body = [
    `Nome: ${values.name.trim()}`,
    `E-mail: ${values.email.trim()}`,
    '',
    values.message.trim(),
  ].join('\n');

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}