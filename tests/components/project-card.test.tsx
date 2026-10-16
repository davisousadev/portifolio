import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectCard from '../../src/components/ui/ProjectCard';
import type { Project } from '../../src/types/portfolio';

const project: Project = {
  id: 'teste',
  title: 'Projeto de teste',
  description: 'Descrição suficiente para explicar o projeto sem depender de links.',
  technologies: ['React', 'TypeScript'],
  demoUrl: 'https://example.com/demo',
  codeUrl: 'https://github.com/exemplo/projeto',
};

describe('ProjectCard', () => {
  it('renders description, technologies and available actions', () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Demonstração' })).toHaveAttribute('href', project.demoUrl);
    expect(screen.getByRole('link', { name: 'Código' })).toHaveAttribute('href', project.codeUrl);
  });

  it('does not render empty actions or technology lists', () => {
    render(<ProjectCard project={{ id: 'vazio', title: 'Sem ações', description: 'Projeto sem links.' }} />);

    expect(screen.queryByRole('link', { name: 'Demonstração' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Código' })).not.toBeInTheDocument();
  });
});