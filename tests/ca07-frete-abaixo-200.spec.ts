import { test, expect } from '@playwright/test';

test('CA07 - Cobrar frete para subtotal abaixo de R$ 200,00', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Garrafa Térmica 750ml' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 2 itens no carrinho' }).click();

  await expect(
    page.getByRole('region', { name: 'Resumo do pedido' })
      .getByText('FreteR$', { exact: false })
  ).toContainText('R$ 19,90');
});
