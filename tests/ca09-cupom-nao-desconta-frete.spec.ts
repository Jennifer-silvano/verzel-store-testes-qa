
import { test, expect } from '@playwright/test';

test('CA09 - Cupom não aplica desconto sobre o frete', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Camiseta Essencial' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('BEMVINDO10');

  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  const resumo = page.getByRole('region', { name: 'Resumo do pedido' });

  await expect(resumo).toContainText('R$ 59,90');
  await expect(resumo).toContainText('R$ 5,99');
  await expect(resumo.getByText('R$ 19,90', { exact: true })).toBeVisible();
  await expect(resumo).toContainText('R$ 73,81');
});
