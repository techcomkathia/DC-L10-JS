-- seleção do banco
use lojal10;

-- fazer a seleção das informações da tabela item
-- todas as colunas
SELECT * FROM item;

-- selecionar apenas algumas colunas
SELECT nomeItem
FROM item;

-- nomeação de uma coluna para a seleção (não modifica na tabela)
SELECT nomeItem AS'nome produto'
FROM item;

-- seleção de informações que atendam uma dada condição
SELECT * 
FROM item
where idItem <=3;

-- selecionar os produtos com o preço inferior a 300
SELECT * 
FROM item
WHERE valorUnit < 300;

-- nomeando colunas para a seleção e fazendo colunas calculadas (não existem na tabela)
SELECT idItem as 'codigo',
nomeItem as 'nome produto',
valorUnit as  'Preço',
-- coluna calculada
(valorUnit * 0.1) as 'comissão vendedor'
FROM item;


-- select com limite de quantidade de registros a serem retornados
-- selecionar apenas os 8 primeiros produtos vendidos
SELECT * 
FROM venda
LIMIT 8;

-- Selecionar apenas os 5 produtos vendidos com mais de 3 itens
SELECT *
FROM venda
WHERE quantidade>3 and quantidade<=5
limit 8;

-- ordenaçao de registros por uma coluna específica 
-- menor para o maior
SELECT idItem as id,
nomeItem as 'nome',
valorUnit as 'valor'
FROM item
order by valorUnit ASC;

-- maior para menor
SELECT idItem as id,
nomeItem as 'nome',
valorUnit as 'valor'
FROM item
order by valorUnit DESC;

SELECT idItem as id,
nomeItem as 'nome',
valorUnit as 'valor'
FROM item
order by nomeItem ASC;

SELECT idItem as id,
nomeItem as 'nome',
valorUnit as 'valor'
FROM item
order by nomeItem desc;

-- AGRUPAR AS VENDAS POR PRODUTOR
-- contando quantos produtos cada prododutor vendeu
SELECT fkProd as 'cod Produtor',
count(quantidade) as 'vendas em notas fiscais '
FROM venda
group by fkProd;

-- MOSTRAR apenas valores distintos
SELECT DISTINCT fkNf as 'cod Produtor'
FROM venda;

SELECT *
FROM venda;


SELECT venda.idVenda ,
produtor.nomeProdutor,
item.nomeItem,
venda.quantidade,
venda.desconto,
(venda.quantidade * item.valorUnit) as 'Total sem desconto'
FROM venda 
INNER JOIN produtor
	ON venda.fkProd = produtor.codProd
INNER JOIN item
	ON item.idItem = venda.fkItem
ORDER BY venda.idVenda;



