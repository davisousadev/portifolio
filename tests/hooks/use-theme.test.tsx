import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import useTheme from '../../src/hooks/useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
  });

  it('uses the system fallback and persists the next theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    act(() => result.current.toggleTheme());

    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('discards an invalid stored value', () => {
    localStorage.setItem('portfolio-theme', 'sepia');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
  });
});