import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';
import App from '../../src/App';

expect.extend(toHaveNoViolations);

describe('initial composition accessibility', () => {
  it('has no basic axe violations', async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
});