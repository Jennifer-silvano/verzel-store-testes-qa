# Relatório de Bugs Encontrados

## BUG-001 — Frete cobrado incorretamente para subtotal de R$ 200,00

**Severidade:** Alta  
**Status:** Aberto  
**Área afetada:** Carrinho / Cálculo de frete  
**Referência:** CA06 — Frete grátis para subtotal maior ou igual a R$ 200,00.

### Pré-condições
- Aplicação Verzel Store acessível.
- Carrinho vazio.

### Passos para reprodução
1. Adicionar 2 Mochila Urbana 20L (R$ 100,00) ao carrinho.
2. Acessar o carrinho e visualizar o resumo do pedido.

### Resultado esperado
O frete deve ser grátis, pois o subtotal é exatamente R$ 200,00 e a regra estabelece frete grátis para valores maiores ou iguais a esse limite.

### Resultado obtido
O sistema cobra R$ 19,90 de frete, mesmo com subtotal de R$ 200,00.

### Evidência
`evidencias/BUG-001-frete-200.png`

---

## BUG-002 — API permite quantidade superior a 5 unidades por produto

**Severidade:** Alta  
**Status:** Aberto  
**Área afetada:** API de cálculo do carrinho e criação de pedidos  
**Referência:** CA10 — Limite máximo de 5 unidades por produto/pedido.

### Pré-condições
- API da Verzel Store acessível.
- Produto existente no catálogo.

### Passos para reprodução
1. Enviar uma requisição `POST /api/carrinho/calcular` com um produto existente e quantidade igual a 6.
2. Verificar a resposta da API.
3. Enviar uma requisição `POST /api/pedidos` com um produto existente e quantidade igual a 6.
4. Verificar o status e o conteúdo da resposta.

### Resultado esperado
A API deve rejeitar quantidades superiores a 5 unidades por produto, retornando HTTP `422` com o código `QUANTIDADE_MAXIMA_EXCEDIDA`, conforme o contrato esperado.

### Resultado obtido
- No endpoint `/api/carrinho/calcular`, a API aceita a quantidade 6 e realiza o cálculo normalmente.
- No endpoint `/api/pedidos`, a API retorna HTTP `201` e cria um pedido com 6 unidades do mesmo produto.

Isso permite a criação de pedidos que violam a regra de quantidade máxima estabelecida.

### Evidências
- `evidencias/BUG-002-api-quantidade-6.png`
- `evidencias/BUG-002-api-pedido-quantidade-6.png`