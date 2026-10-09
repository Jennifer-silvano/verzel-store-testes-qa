
import { test, expect } from '@playwright/test';

test('CA11 - Exibir valores monetários com duas casas decimais', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('article', { name: 'Calça Jeans Slim' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Boné Aba Curva' })
    .getByRole('button')
    .click();

  await page.getByRole('article', { name: 'Kit 3 Pares de Meias' })
    .getByRole('button')
    .click();

  await page.getByRole('link', { name: 'Carrinho 3 itens no carrinho' })
    .click();

  await page.getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('BEMVINDO10');

  await page.getByRole('button', { name: 'Aplicar cupom' })
    .click();

  const resumo = page.getByRole('region', { name: 'Resumo do pedido' });

  await expect(resumo).toContainText('R$ 219,70');
  await expect(resumo).toContainText('R$ 21,97');
  await expect(resumo).toContainText('R$ 197,73');
});
