DROP TABLE IF EXISTS `cat_continentes`;
CREATE TABLE `cat_continentes` (
  `continente_id` int(11) NOT NULL AUTO_INCREMENT,
  `continente_nombre` varchar(30) DEFAULT NULL,
  `estatus` int(1) DEFAULT 1,
  PRIMARY KEY (`continente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `cat_continentes` (continente_nombre) VALUES 
('América'),('Europa'),('Asia'),('África'),('Oceanía');

DROP TABLE IF EXISTS `cat_idiomas`;
CREATE TABLE `cat_idiomas` (
  `idioma_id` int(11) NOT NULL AUTO_INCREMENT,
  `idioma` varchar(30) DEFAULT NULL,
  `estatus` int(1) DEFAULT 1,
  PRIMARY KEY (`idioma_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `cat_idiomas` (idioma) VALUES 
('Español'),('Inglés'),('Francés'),('Japonés'),('Chino'),('Alemán');


DROP TABLE IF EXISTS `paises`;
CREATE TABLE `paises` (
  `pais_id` int(11) NOT NULL AUTO_INCREMENT,
  `pais_nombre` varchar(30) DEFAULT NULL,
  `codigo` varchar(10) DEFAULT NULL,
  `moneda` varchar(30) DEFAULT NULL,
  `capital` varchar(30) DEFAULT NULL,
  `idioma_id` int(11) NOT NULL,
  `continente_id` int(11) NOT NULL,
  `estatus` int(1) DEFAULT 1,
  PRIMARY KEY (`pais_id`),
  CONSTRAINT `FK1_idioma_id` FOREIGN KEY (`idioma_id`) REFERENCES `cat_idiomas` (`idioma_id`),
  CONSTRAINT `FK2_continente_id` FOREIGN KEY (`continente_id`) REFERENCES `cat_continentes` (`continente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


INSERT INTO `paises` (pais_nombre, codigo, moneda, capital, idioma_id, continente_id) VALUES 
('México','MX','Pesos mexicanos', 'CDMX', '1', '1'),
('Colombia','COL','Pesos colombianos', 'Bogotá', '1', '1'),
('Francia','FR','Euro', 'París', '3', '2'),
('Japón','JP','Yen', 'Tokio', '4', '3');


