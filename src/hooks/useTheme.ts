import { useEffect, useState } from 'react';
import { getInitialTheme, THEME_STORAGE_KEY } from '../lib/theme';
import type { Theme } from '../types/portfolio';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // A blocked storage should not prevent the session theme from working.
    }
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}

export default useTheme;