use banco_vendasl09;

-- atualização com chave estrangeira
-- atualizar todos os itens da NF 01 para terem desconto de 30%
-- fkNF é a chave estrangeira na tabela venda
UPDATE venda
SET desconto = 30.00
WHERE fkNf = 1;

-- atualizar o item da nf 1 que é o de id 2 para desconto de 50
-- fkNF = 1  e fkItem = 2
UPDATE venda
SET desconto = 50.00
WHERE fkNf = 1 AND fkItem = 2;