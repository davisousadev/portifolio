import { expect, test } from '@playwright/test';

test('exibe projetos e links externos válidos', async ({ page }) => {
  await page.goto('/');

  const projectsSection = page.locator('#projetos');
  await expect(projectsSection.getByRole('heading', { name: 'Projetos' })).toBeVisible();
  await expect(projectsSection.getByRole('article')).toHaveCount(3);

  const demoLink = projectsSection.getByRole('link', { name: 'Demonstração' });
  await expect(demoLink).toHaveAttribute('href', 'https://example.com/atlas-financeiro');
  await expect(demoLink).toHaveAttribute('target', '_blank');

  const codeLinks = projectsSection.getByRole('link', { name: 'Código' });
  await expect(codeLinks).toHaveCount(2);
  await expect(codeLinks.first()).toHaveAttribute('rel', 'noreferrer');
});