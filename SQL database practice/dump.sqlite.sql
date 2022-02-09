-- TABLE
CREATE TABLE "apostadores" (apostador_id integer primary key, nombre varchar(20), apellido varchar(20) NOT NULL DEFAULT '');
CREATE TABLE apuestas ( apuesta_id INTEGER PRIMARY KEY AUTOINCREMENT, apostador_id INTEGER REFERENCES apostadores(apostador_id), partido_id INTEGER REFERENCES partidos(partido_id), monto_apostado double NOT NULL DEFAULT '', marcador_apostado varchar(50) NOT NULL DEFAULT '', resultado boolean);
CREATE TABLE equipos ( equipo_id INTEGER PRIMARY KEY AUTOINCREMENT, nombre varchar(50) NOT NULL DEFAULT '', estadio varchar(50) NOT NULL DEFAULT '', ciudad varchar(50) NOT NULL DEFAULT '');
CREATE TABLE partidos ( partido_id INTEGER PRIMARY KEY AUTOINCREMENT, equipo_id INTEGER REFERENCES equipos(equipo_id), activo boolean NOT NULL DEFAULT '', ganador varchar(50), marcador_definitivo varchar(50), equipo_id_2 INTEGER REFERENCES equipos(equipo_id));
 
-- INDEX
INSERT INTO apuestas 
    (apostador_id, partido_id, monto_apostado, marcador_apostado, resultado ) 
VALUES
    (1, 1, 60,'1-0',false),
    (1, 2, 30,'2-0',true),
    (2, 1, 40,'0-0',false),
    (2, 3, 40,'1-0',false),
    (3, 2, 50,'2-0',true),
    (3, 3, 80,'0-0',true),
    (1, 3, 100,'0-0',true),
    (1, 1, 70,'3-0',true),
    (2, 2, 90,'2-0',true);

INSERT INTO partidos 
    (equipo_id, activo, ganador, marcador_definitivo, equipo_id_2 ) 
VALUES
    (1, false, '1','3-0',2),
    (2, false, '2','2-0',3),
    (3, false, '-','0-0',4),
    (4, true, '','',5),
    (5, true, '','',6),
    (6, true, '','',1);

INSERT INTO apostadores 
    (nombre, apellido) 
VALUES
    ('Renzo', 'Manrique'),
    ('Jose', 'Perez'),
    ('Jorge', 'Montes');

INSERT INTO equipos 
    (nombre, estadio, ciudad) 
VALUES
    ('Lima FC', 'Nacional', 'Lima'),
    ('Arequipa FC', 'Areq', 'Arequipa'),
    ('Cuzco FC', 'Cuz', 'Cuzco');

-- RETO: Consulta que indique cual o cuales son los apostadores que han gananado más apuestas
 
SELECT  nombre, COUNT(nombre) as 'Veces que gano' 
FROM apuestas, apostadores
WHERE apuestas.apostador_id=apostadores.apostador_id and resultado=true
GROUP by nombre
ORDER BY COUNT(nombre) DESC 
LIMIT (1)
 


