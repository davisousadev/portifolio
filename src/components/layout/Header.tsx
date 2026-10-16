import type { NavigationItem, Theme } from '../../types/portfolio';
import ThemeToggle from '../ui/ThemeToggle';

interface HeaderProps {
  items: NavigationItem[];
  theme: Theme;
  onThemeChange: () => void;
}

function Header({ items, theme, onThemeChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-canvas/95 backdrop-blur" role="banner">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a className="text-lg font-bold text-ink" href="#inicio">Davi Sousa</a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-end gap-4 text-sm font-semibold text-muted">
            {items.map((item) => (
              <li key={item.id}>
                <a className="hover:text-accent-strong" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle theme={theme} onToggle={onThemeChange} />
      </div>
    </header>
  );
}

export default Header;