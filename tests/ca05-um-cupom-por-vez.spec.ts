import { test, expect } from '@playwright/test';

test('CA05 - Permitir apenas um cupom por pedido', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Calça Jeans Slim' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('BEMVINDO10');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(
    page.getByText('Cupom BEMVINDO10 aplicado.')
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Remover cupom' })
  ).toBeVisible();

  await expect(
    page.getByRole('textbox', { name: 'Cupom de desconto' })
  ).toHaveCount(0);
});
