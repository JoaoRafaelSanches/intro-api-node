USE bd_tcc_infonet_224_farmacia;

CREATE TABLE Usuarios (
    usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nome VARCHAR(80) NOT NULL,
    usu_email VARCHAR(100) NOT NULL,
    usu_senha VARCHAR(48) NOT NULL,
    usu_cpf CHAR(11) UNIQUE,
    usu_tipo TINYINT CHECK (usu_tipo IN (0,1,2))
);

CREATE TABLE Funcionarios (
    func_id INT PRIMARY KEY AUTO_INCREMENT,
    cargo VARCHAR(50) NOT NULL,
    usu_id INT NOT NULL,
    FOREIGN KEY (usu_id) REFERENCES Usuarios(usu_id)
);

CREATE TABLE Farmacias (
    farm_id INT PRIMARY KEY AUTO_INCREMENT,
    farm_nome VARCHAR(50) NOT NULL,
    farm_endereco VARCHAR(200) NOT NULL,
    farm_telefone VARCHAR(15),
    farm_email VARCHAR(80) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    farm_logo VARCHAR(255) NOT NULL,
    func_id INT NOT NULL,
    FOREIGN KEY (func_id) REFERENCES Funcionarios(func_id)
);

CREATE TABLE Avaliacoes (
    ava_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_id INT NOT NULL,
    far_id INT NOT NULL,
    nota TINYINT,
    ava_comentario VARCHAR(100),
    FOREIGN KEY (usu_id) REFERENCES Usuarios(usu_id),
    FOREIGN KEY (far_id) REFERENCES Farmacias(farm_id)
);

CREATE TABLE Laboratorios (
    lab_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_laboratorio VARCHAR(60) NOT NULL,
    lab_cnpj CHAR(14) NOT NULL UNIQUE
);

CREATE TABLE FormasFarmaceuticas (
    forma_id INT PRIMARY KEY AUTO_INCREMENT,
    forma_nome VARCHAR(50) NOT NULL
);

CREATE TABLE Medicamentos (
    med_id INT PRIMARY KEY AUTO_INCREMENT,
    med_nome VARCHAR(60) NOT NULL,
    med_ean VARCHAR(15) NOT NULL,
    med_prescricao VARCHAR(15) NOT NULL,
    med_dosagem VARCHAR(10) NOT NULL,
    med_quantidade VARCHAR(10) NOT NULL,
    med_tarja VARCHAR(15) NOT NULL,
    tipo_produto VARCHAR(15) NOT NULL,
    principio_ativo VARCHAR(50) NOT NULL,
    forma_id INT NOT NULL,
    lab_id INT NOT NULL,
    FOREIGN KEY (forma_id) REFERENCES FormasFarmaceuticas(forma_id),
    FOREIGN KEY (lab_id) REFERENCES Laboratorios(lab_id)
);

CREATE TABLE Precos (
    pre_id INT PRIMARY KEY AUTO_INCREMENT,
    med_id INT NOT NULL,
    farm_id INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    ativo BIT,
    FOREIGN KEY (med_id) REFERENCES Medicamentos(med_id),
    FOREIGN KEY (farm_id) REFERENCES Farmacias(farm_id)
);

CREATE TABLE Promocoes (
    promo_id INT PRIMARY KEY AUTO_INCREMENT,
    farm_id INT NOT NULL,
    med_id INT NOT NULL,
    promo_desconto DECIMAL(10,2),
    promo_inicio DATE,
    promo_fim DATE,
    FOREIGN KEY (farm_id) REFERENCES Farmacias(farm_id),
    FOREIGN KEY (med_id) REFERENCES Medicamentos(med_id)
);
