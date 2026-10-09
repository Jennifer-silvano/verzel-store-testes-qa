import { test, expect } from '@playwright/test';

test('CA04 - Tentar aplicar um cupom expirado', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('VERAO2026');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(
    page.getByText('Cupom expirado.')
  ).toBeVisible();
});
