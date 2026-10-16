import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useContactForm from '../../src/hooks/useContactForm';

describe('useContactForm', () => {
  it('validates fields and preserves values', () => {
    const { result } = renderHook(() => useContactForm('ola@example.com', vi.fn()));

    act(() => result.current.updateField('name', 'Ana'));
    act(() => result.current.updateField('email', 'invalido'));
    act(() => result.current.updateField('message', 'curta'));
    act(() => result.current.submit());

    expect(result.current.state.status).toBe('invalid');
    expect(result.current.state.values.name).toBe('Ana');
    expect(result.current.state.errors.email).toBeDefined();
    expect(result.current.state.errors.message).toBeDefined();
  });

  it('reports mailto success without clearing values', () => {
    const openMailto = vi.fn();
    const { result } = renderHook(() => useContactForm('ola@example.com', openMailto));

    act(() => {
      result.current.updateField('name', 'Ana');
      result.current.updateField('email', 'ana@example.com');
      result.current.updateField('message', 'Gostaria de falar sobre um projeto.');
      result.current.submit();
    });

    expect(openMailto).toHaveBeenCalledOnce();
    expect(result.current.state.status).toBe('success');
    expect(result.current.state.values.name).toBe('Ana');
  });
});