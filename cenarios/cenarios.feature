Feature: Aplicação de cupons e cálculo de frete

  Scenario: Aplicar cupom de desconto válido
    Given que tenho produtos no carrinho
    When aplico o cupom "BEMVINDO10"
    Then deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

  Scenario: Aceitar cupom sem diferenciar maiúsculas e minúsculas
    Given que tenho produtos no carrinho
    When aplico o cupom "bemvindo10"
    Then o cupom deve ser aceito
    And deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

  Scenario: Aceitar cupom com espaços extras
    Given que tenho produtos no carrinho
    When aplico o cupom "  BEMVINDO10  "
    Then o cupom deve ser aceito
    And deve ser aplicado um desconto de 10% sobre o subtotal dos produtos

  Scenario: Tentar aplicar um cupom inexistente
    Given que tenho produtos no carrinho
    When aplico um cupom inexistente
    Then deve ser exibida a mensagem "Cupom inválido."
    And nenhum desconto deve ser aplicado

  Scenario: Tentar aplicar um cupom expirado
    Given que tenho produtos no carrinho
    When aplico o cupom "VERAO2026"
    Then deve ser exibida a mensagem "Cupom expirado."
    And nenhum desconto deve ser aplicado

  Scenario: Permitir apenas um cupom por pedido
    Given que tenho produtos no carrinho
    And o cupom "BEMVINDO10" está aplicado
    When tento trocar de cupom sem remover o atual
    Then o sistema deve exigir a remoção do cupom atual antes de aplicar outro

  Scenario: Obter frete grátis com subtotal de R$ 200,00
    Given que tenho produtos no carrinho
    And o subtotal dos produtos é de R$ 200,00
    When visualizo o resumo do pedido
    Then o frete deve ser grátis

  Scenario: Cobrar frete com subtotal inferior a R$ 200,00
    Given que tenho produtos no carrinho
    And o subtotal dos produtos é inferior a R$ 200,00
    When visualizo o resumo do pedido
    Then o frete deve ser de R$ 19,90
    And deve ser informado quanto falta para obter frete grátis

  Scenario: Calcular o frete antes do desconto
    Given que tenho produtos no carrinho com subtotal de R$ 210,00
    And aplico o cupom "BEMVINDO10"
    When visualizo o resumo do pedido
    Then o desconto deve ser de R$ 21,00
    And o frete deve ser grátis

  Scenario: Não aplicar desconto sobre o frete
    Given que tenho produtos no carrinho com subtotal de R$ 100,00
    And aplico o cupom "BEMVINDO10"
    When visualizo o resumo do pedido
    Then o desconto deve ser de R$ 10,00
    And o frete deve ser de R$ 19,90
    And o total deve ser de R$ 109,90

  Scenario: Limitar a quantidade a 5 unidades por produto
    Given que tenho um produto no carrinho
    When tento adicionar uma sexta unidade do mesmo produto
    Then a interface não deve permitir ultrapassar 5 unidades
    And a API deve rejeitar a quantidade superior a 5 com erro QUANTIDADE_MAXIMA_EXCEDIDA

  Scenario: Exibir valores monetários com duas casas decimais
    Given que tenho produtos no carrinho
    When visualizo o resumo do pedido
    Then o subtotal, o desconto, o frete e o total devem ser exibidos com duas casas decimais