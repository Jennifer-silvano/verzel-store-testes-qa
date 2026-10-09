import { test, expect } from '@playwright/test';

test('CA06 - BUG-001: frete cobrado com subtotal de R$ 200,00', async ({ page }) => {
  test.fail(true, 'BUG-001 conhecido: frete cobrado com subtotal de R$ 200,00'); {
  await page.goto('/');

  await page.getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Garrafa Térmica 750ml' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Garrafa Térmica 750ml' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 3 itens no carrinho' }).click();

  await expect(page.getByText('Subtotal').locator('..'))
    .toContainText('R$ 200,00');

  await expect(
  page.getByRole('region', { name: 'Resumo do pedido' })
    .getByText('FreteR$', { exact: false })
).toContainText('R$ 0,00');
}});
