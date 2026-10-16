import { describe, expect, it } from 'vitest';
import { buildMailtoUrl } from '../../src/lib/contact';

describe('buildMailtoUrl', () => {
  it('encodes subject and body safely', () => {
    const url = buildMailtoUrl('ola@example.com', {
      name: 'Ana & Bruno',
      email: 'ana@example.com',
      message: 'Olá, gostaria de conversar.',
    });

    expect(url).toBe('mailto:ola@example.com?subject=Contato%20de%20Ana%20%26%20Bruno&body=Nome%3A%20Ana%20%26%20Bruno%0AE-mail%3A%20ana%40example.com%0A%0AOl%C3%A1%2C%20gostaria%20de%20conversar.');
  });
});