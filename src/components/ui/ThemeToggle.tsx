import type { Theme } from '../../types/portfolio';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === 'light' ? 'escuro' : 'claro';

  return (
    <button
      className="min-h-11 rounded-md border border-border bg-surface px-3 py-2 text-sm font-semibold text-ink hover:border-accent"
      type="button"
      onClick={onToggle}
      aria-label={`Ativar tema ${nextTheme}`}
    >
      Tema {theme === 'light' ? 'claro' : 'escuro'}
    </button>
  );
}

export default ThemeToggle;