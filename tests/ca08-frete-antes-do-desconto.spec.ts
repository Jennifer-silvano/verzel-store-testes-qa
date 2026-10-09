import { test, expect } from '@playwright/test';

test('CA08 - Calcular frete antes do desconto', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Camiseta Essencial' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Kit 3 Pares de Meias' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Kit 3 Pares de Meias' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 4 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('BEMVINDO10');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

 await expect(
  page.getByRole('region', { name: 'Resumo do pedido' })
    .getByText('Grátis', { exact: true })
).toBeVisible();

});