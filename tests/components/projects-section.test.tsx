import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectsSection from '../../src/components/sections/ProjectsSection';
import { projects } from '../../src/data/projects';

describe('ProjectsSection', () => {
  it('renders the local project catalog and only available links', () => {
    render(<ProjectsSection projects={projects} />);

    expect(screen.getByRole('heading', { name: 'Projetos' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(projects.length);
    expect(screen.getAllByRole('link', { name: 'Demonstração' })).toHaveLength(1);
    expect(screen.getAllByRole('link', { name: 'Código' })).toHaveLength(2);
  });
});