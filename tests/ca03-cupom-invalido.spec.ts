import { test, expect } from '@playwright/test';

test('CA03 - Tentar aplicar um cupom inexistente', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Tênis Casual Urbano' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('NAOEXISTE10');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(
    page.getByText('Cupom inválido.')
  ).toBeVisible();
});