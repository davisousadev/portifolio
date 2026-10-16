import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Footer from '../../src/components/layout/Footer';
import Header from '../../src/components/layout/Header';
import { profile } from '../../src/data/profile';
import { socialLinks } from '../../src/data/socialLinks';
import type { NavigationItem } from '../../src/types/portfolio';

const navigationItems: NavigationItem[] = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'projetos', label: 'Projetos', href: '#projetos' },
  { id: 'contato', label: 'Contato', href: '#contato' },
];

describe('portfolio layout', () => {
  it('renders navigation and an accessible theme action', () => {
    render(
      <Header
        items={navigationItems}
        theme="light"
        onThemeChange={vi.fn()}
      />,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#projetos');
    expect(screen.getByRole('button', { name: /tema escuro/i })).toBeInTheDocument();
  });

  it('renders direct contact and social links in the footer', () => {
    render(<Footer profileName={profile.name} email={profile.email} socialLinks={socialLinks} />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute('href', `mailto:${profile.email}`);
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('rel', 'noreferrer');
  });
});