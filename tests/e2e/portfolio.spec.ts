import { expect, test } from '@playwright/test';

test('mantém navegação, tema e validação acessível nos breakpoints principais', async ({ page }) => {
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }

  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto('/');

  await page.getByRole('button', { name: 'Ativar tema escuro' }).press('Enter');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await expect(page.getByRole('button', { name: 'Ativar tema claro' })).toBeFocused();

  await page.getByRole('button', { name: 'Ativar tema claro' }).press('Enter');
  await expect(page.locator('html')).not.toHaveClass(/dark/);

  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.getByText('Revise os campos destacados.')).toBeVisible();
  await expect(page.locator('#contact-name')).toBeFocused();
  await expect(page.locator('#contact-name')).toHaveAttribute('aria-describedby', 'contact-name-error');
});