# Verzel Store — Testes de Qualidade de Software (QA)

Projeto de testes manuais, exploratórios e automatizados da aplicação Verzel Store, desenvolvido como parte de uma avaliação técnica de QA.

## Objetivos

- Validar as regras de negócio descritas na documentação.
- Elaborar cenários de teste utilizando Gherkin.
- Executar testes manuais e exploratórios.
- Registrar bugs com resultados esperados, resultados obtidos e evidências.
- Automatizar cenários da interface utilizando Playwright.

## Tecnologias e ferramentas

- Playwright
- TypeScript
- Node.js
- Postman
- Gherkin
- Git e GitHub
- Inteligência Artificial como ferramenta de apoio

## Estrutura do projeto

- `cenarios/` — cenários de teste em Gherkin.
- `api/` — documentação dos testes manuais de API.
- `tests/` — testes automatizados com Playwright.
- `evidencias/` — capturas de tela dos bugs encontrados.
- `bugs.md` — relatório dos bugs identificados.
- `resultados-testes-manuais.md` — resultados dos testes manuais da interface.
- `playwright.config.ts` — configuração do Playwright.

## Pré-requisitos

- Node.js instalado.
- npm instalado.

## Como instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

## Como executar os testes automatizados

Executar um teste específico:

```bash
npx playwright test tests/ca01-cupom-valido.spec.ts --project=chromium
```

Executar outro teste, substituindo pelo nome do arquivo desejado:

```bash
npx playwright test tests/NOME-DO-TESTE.spec.ts --project=chromium
```

Executar todos os testes:

```bash
npx playwright test --project=chromium
```

Abrir o relatório HTML após a execução:

```bash
npx playwright show-report
```

## Entregáveis

- **Cenários de teste:** `cenarios/cenarios.feature`
- **Resultados dos testes manuais da interface:** `resultados-testes-manuais.md`
- **Resultados dos testes manuais de API:** `api/api-tests.md`
- **Relatório de bugs:** `bugs.md`
- **Evidências dos defeitos:** pasta `evidencias/`
- **Testes automatizados:** pasta `tests/`

## Bugs identificados

- **BUG-001:** frete cobrado incorretamente quando o subtotal é exatamente R$ 200,00.
- **BUG-002:** API permite quantidades superiores a cinco unidades do mesmo produto.

Os passos para reprodução, os resultados esperados e obtidos e as evidências estão documentados no relatório de bugs.

## Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente para auxiliar na estruturação e revisão de testes automatizados com Playwright e esclarecer dúvidas técnicas relacionadas aos testes de API no Postman.

Os cenários foram avaliados com base na documentação da aplicação, e os resultados e defeitos registrados foram relacionados às verificações realizadas durante a execução dos testes.

## Observações

- O teste automatizado CA06 reproduz o BUG-001. Enquanto o defeito existir, é esperado que essa validação falhe.
- Os resultados documentados correspondem às execuções realizadas durante a avaliação.
- Os testes manuais de API foram realizados utilizando o Postman e os recursos disponíveis para consultar a API.