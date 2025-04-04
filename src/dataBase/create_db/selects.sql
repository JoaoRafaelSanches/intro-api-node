SELECT ava_id, usu_id, far_id, nota, ava_comentario FROM avaliacoes;

SELECT farm_id, farm_nome, farm_endereco, farm_telefone, farm_email, cnpj, farm_logo, func_id FROM farmacias;

SELECT forma_id, forma_nome FROM formasfarmaceuticas;

SELECT func_id, cargo, usu_id FROM funcionarios;

SELECT lab_id, nome_laboratorio, lab_cnpj FROM laboratorios;

SELECT med_id, med_nome, med_dosagem, med_quantidade, tipo_produto, forma_id, descricao, lab_id, med_img FROM medicamentos;

SELECT pre_id, med_id, preco, ativo FROM precos;

SELECT promo_id, farm_id, med_id, promo_desconto, promo_inicio, promo_fim FROM promocoes;

SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo FROM usuarios;