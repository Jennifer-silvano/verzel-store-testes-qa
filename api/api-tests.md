# Testes de API — Verzel Store

## Ambiente

**Base URL:**  
https://verzel-store.qa-test-verzel-store.workers.dev

**Métodos de execução:** testes manuais utilizando Postman e navegador.

## Resultados

### Produtos

- API01 — Listar produtos: **PASS**
- API02 — Consultar produto existente: **PASS**
- API03 — Consultar produto inexistente: **PASS**

### Carrinho

- API04 — Calcular carrinho com cupom válido: **PASS**
- API05 — Calcular carrinho com cupom inexistente: **PASS**
- API06 — Calcular carrinho com cupom expirado: **PASS**
- API07 — Validar quantidade máxima de unidades: **FAIL — BUG-002**
  - A API aceita quantidade superior a cinco unidades e realiza o cálculo normalmente.
- API08 — Quantidade ausente: **PASS**
- API09 — Lista de itens vazia: **PASS**
- API10 — Item inválido: **PASS**
- API11 — Produto inexistente: **PASS**
- API12 — Produto duplicado: **PASS**
- API13 — Quantidade igual a zero: **PASS**
- API14 — Quantidade não inteira: **PASS**
- API15 — JSON inválido: **PASS**
- API16 — Método HTTP não permitido: **PASS**

### Pedidos

- API17 — Criar pedido válido: **PASS**
- API18 — Criar pedido com cupom inexistente: **PASS**
- API19 — Criar pedido com cupom expirado: **PASS**
- API20 — E-mail inválido: **PASS**
- API21 — Nome inválido: **PASS**
- API22 — CEP inválido: **PASS**
- API23 — Validar quantidade máxima de unidades no pedido: **FAIL — BUG-002**
  - A API retorna HTTP 201 e cria um pedido com seis unidades do mesmo produto, contrariando o critério CA10.
- API24 — CEP com hífen: **PASS**
- API25 — Criar pedido sem itens: **PASS**

## Bugs relacionados

- **BUG-002 — API permite quantidade superior a cinco unidades por produto.** Consulte os detalhes e as evidências no arquivo `bugs.md` e na pasta `evidencias/`.

## Observações

Os testes marcados como FAIL representam comportamentos que não atendem às regras definidas na documentação da aplicação. Os demais resultados refletem os comportamentos observados durante os testes manuais.