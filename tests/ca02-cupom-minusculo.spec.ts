import { test, expect } from '@playwright/test';

test('CA02 - Aceitar cupom em letras minúsculas', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Calça Jeans Slim' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('bemvindo10');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(
    page.getByText('Desconto (BEMVINDO10)- R$')
  ).toBeVisible();
});


test('CA02 - Aceitar cupom com espaços extras', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Calça Jeans Slim' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('  BEMVINDO10  ');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(
    page.getByText('Desconto (BEMVINDO10)- R$')
  ).toBeVisible();
});
