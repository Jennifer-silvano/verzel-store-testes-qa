# Resultados dos Testes Manuais — Verzel Store

## Ambiente

- **Aplicação:** Verzel Store
- **Versão da documentação:** 2.3.0
- **Data de publicação da versão:** 30/09/2026
- **Método:** testes manuais e exploratórios da interface web.

## Resultados por critério de aceite

| Critério | Cenário | Resultado | Observações |
|---|---|---|---|
| CA01 | Aplicar cupom válido | PASS | Cupom BEMVINDO10 aplica desconto de 10%. |
| CA02 | Aceitar cupom com variações de maiúsculas/minúsculas e espaços | PASS | Cupom aceito em minúsculas e com espaços extras. |
| CA03 | Aplicar cupom inexistente | PASS | Mensagem "Cupom inválido." e nenhum desconto. |
| CA04 | Aplicar cupom expirado | PASS | Mensagem "Cupom expirado." e nenhum desconto. |
| CA05 | Permitir apenas um cupom por pedido | PASS | Para trocar, é necessário remover o cupom atual. |
| CA06 | Frete grátis para subtotal de R$ 200,00 | FAIL — BUG-001 | Sistema cobra R$ 19,90 de frete no limite exato. |
| CA07 | Cobrar frete abaixo de R$ 200,00 | PASS | Frete de R$ 19,90. |
| CA08 | Calcular frete antes do desconto | PASS | Frete grátis mantido com subtotal anterior ao desconto acima de R$ 200,00. |
| CA09 | Não aplicar desconto ao frete | PASS | Frete permanece em R$ 19,90. |
| CA10 | Limitar a quantidade a 5 unidades na interface | PASS | A sexta unidade é bloqueada. |
| CA11 | Exibir valores monetários com duas casas decimais | PASS | Valores exibidos com duas casas decimais. |

## Bugs identificados

- **BUG-001:** cobrança de frete quando o subtotal é exatamente R$ 200,00. Detalhes em `bugs.md` e evidência em `evidencias/BUG-001-frete-200.png`.
- **BUG-002:** a API aceita quantidade superior a cinco unidades por produto. Detalhes em `bugs.md` e evidências na pasta `evidencias/`.

## Observações

Os resultados acima registram os comportamentos observados durante os testes manuais da interface. Os testes automatizados estão documentados separadamente nos arquivos da pasta `tests/`. Os testes manuais de API estão documentados em `api/api-tests.md`.