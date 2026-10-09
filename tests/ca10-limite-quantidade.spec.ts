
import { test, expect } from '@playwright/test';

test('CA10 - Bloquear a sexta unidade do mesmo produto', async ({ page }) => {
  await page.goto('/');

  const produto = page.getByRole('article', {
    name: 'Boné Aba Curva'
  });

  const botaoAdicionar = produto.getByRole('button');

  // Adiciona as primeiras 5 unidades
  for (let i = 0; i < 5; i++) {
    await botaoAdicionar.click();
  }

  // Confirma que a mensagem de limite aparece
  await expect(
    page.getByText('Limite de 5 unidades atingido.')
  ).toBeVisible();

  // Confirma que a quantidade não ultrapassou 5
  await expect(
    page.getByRole('link', { name: /Carrinho 5 itens no carrinho/ })
  ).toBeVisible();
});
