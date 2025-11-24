SELECT * FROM banco_vendasl09.venda;



-- O produtor  de id 3  disse que:
-- cada cliente que levasse 2 produtos só pagaria 1
UPDATE venda	
SET desconto = 50
WHERE fkProd =3 AND quantidade = 2;

-- OU se o produtor for 2 levar mais de 3 produtos o desconto será de 50%

UPDATE venda	
SET desconto = 50
WHERE (fkProd =3 AND quantidade = 2) OR ( fkProd =2 AND quantidade > 3);

-- para excluir uma informação que é usada como chave estrangeira , 
-- devemos excluir primeiro as referencias
-- apagar de venda as informações do produtor 4
DELETE FROM VENDA
WHERE fKProd=4;

-- depois apagar o produtor 4 em sua tabela
DELETE FROM produtor
WHERE codProd=4;

-- não é possível excluir diretamente pois é usado como chave estrangeira na tabela venda
DELETE FROM produtor
WHERE codProd=1;



