CREATE SCHEMA perfumes_db;
USE perfumes_db;


CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(500) NOT NULL,
contraseña VARCHAR(500) NOT NULL,
foto_perfil VARCHAR(500),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
nombre_archivo VARCHAR(500),
nombre_producto VARCHAR(200) NOT NULL,
descripcion_producto TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT UNSIGNED,
id_usuario INT UNSIGNED,
comentario TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

/*Estoy poniendo null en las fotos de perfil pero después las agrego*/
INSERT INTO usuarios VALUES
(DEFAULT, "juancruz@gmail.com", "juanchi123", NULL, NULL, NULL, NULL),
(DEFAULT, "sofisuarez98@gmail.com", "suarezsofi98", NULL, NULL, NULL, NULL),
(DEFAULT, "carlospaz@gmail.com", "Carlitosguerrero", NULL, NULL, NULL, NULL),
(DEFAULT, "ananadulce@gmail.com", "analiaarbusto", NULL, NULL, NULL, NULL),
(DEFAULT, "luisayer@gmail.com", "Luismañana22", NULL, NULL, NULL, NULL),
(DEFAULT, "esteban@gmail.com", "juanchi123", NULL, NULL, NULL, NULL),
(DEFAULT, "marta@gmail.com", "marta1234", NULL, NULL, NULL, NULL),
(DEFAULT, "diego@gmail.com", "diego12343", NULL, NULL, NULL, NULL),
(DEFAULT, "lucia@gmail.com", "lucia1234", NULL, NULL, NULL, NULL),
(DEFAULT, "pedro@gmail.com", "pedro123", NULL, NULL, NULL, NULL),
(DEFAULT, "clara@gmail.com", "clara123", NULL, NULL, NULL, NULL),
(DEFAULT, "javier@gmail.com", "javier123", NULL, NULL, NULL, NULL),
(DEFAULT, "satiago@gmail.com", "santiago124", NULL, NULL, NULL, NULL),
(DEFAULT, "valentina@gmail.com", "valentina124", NULL, NULL, NULL, NULL),
(DEFAULT, "andres@gmail.com", "andres123", NULL, NULL, NULL, NULL),
(DEFAULT, "isabella@gmail.com", "isabella123", NULL, NULL, NULL, NULL),
(DEFAULT, "fernando@gmail.com", "fernando134", NULL, NULL, NULL, NULL),
(DEFAULT, "juancamilacruz@gmail.com", "camila123", NULL, NULL, NULL, NULL),
(DEFAULT, "ricardo@gmail.com", "ricardi1243", NULL, NULL, NULL, NULL),
(DEFAULT, "natalia@gmail.com", "natalia124", NULL, NULL, NULL, NULL),
(DEFAULT, "gonzalo@gmail.com", "gonzalo123", NULL, NULL, NULL, NULL),
(DEFAULT, "lorena@gmail.com", "lorena23243", NULL, NULL, NULL, NULL),
(DEFAULT, "matias@gmail.com", "matias123", NULL, NULL, NULL, NULL),
(DEFAULT, "julieta@gmail.com", "julieta123", NULL, NULL, NULL, NULL),
(DEFAULT, "alejandro@gmail.com", "alejandro123", NULL, NULL, NULL, NULL),
(DEFAULT, "mariana@gmail.com", "mariana123", NULL, NULL, NULL, NULL),
(DEFAULT, "laura@gmail.com", "laura124", NULL, NULL, NULL, NULL),
(DEFAULT, "elena@gmail.com", "elena123", NULL, NULL, NULL, NULL);


INSERT INTO productos VALUES
(DEFAULT, 1, "invictus_victory_elixir.jpg", "Invictus Victory Elixir", "Una fragancia dulce, con vainilla y ámbar especiado. Ideal para la noche.", NULL, NULL, NULL),
(DEFAULT, 7, "bleu_de_chanel.jpg", "Bleu de Chanel", "Una fragancia fresca y amaderada, perfecta para cualquier ocasión.", NULL, NULL, NULL),
(DEFAULT, 4, "JPG_lemale_elixir_a.jpg", "Jean Paul Gaultier Le Male Elixir Absolu", "Una fragancia intensa y seductora, con notas de canela y vainilla.", NULL, NULL, NULL),
(DEFAULT, 1, "dior_sauvage.jpg", "Dior Sauvage", "Una fragancia fresca y especiada, con notas de bergamota y pimienta.", NULL, NULL, NULL),
(DEFAULT, 1, "acqua_di_gio_profumo.jpg", "Acqua di Gio Profumo", "Una fragancia acuática y amaderada, con notas de incienso y pachulí.", NULL, NULL, NULL),
(DEFAULT, 12, "YSL_libre_intense.jpg", "Yves Saint Laurent Libre Intense", "Una fragancia floral y oriental, con notas de lavanda y vainilla.", NULL, NULL, NULL),
(DEFAULT, 15, "tom_ford_ombre_leather.jpg", "Tom Ford Ombre Leather", "Un perfume intenso y masculino, con notas de cuero y jazmín.", NULL, NULL, NULL),
(DEFAULT, 3, "valentino_BIR_intense.jpg", "Valentino Uomo Born in Roma Intense", "Una fragancia con notas de vainilla y lavanda.", NULL, NULL, NULL),
(DEFAULT, 22, "miss_dior.jpg", "Miss Dior", "Una fragancia floral y frutal, con notas de rosa y durazno.", NULL, NULL, NULL),
(DEFAULT, 1, "LV_imagination.jpg", "Louis Vuitton Imagination", "Una fragancia fresca y limpia, con notas cítricas.", NULL, NULL, NULL);



INSERT INTO comentarios VALUES
(DEFAULT, 1, 1, "Me encanta este perfume, es perfecta para el boliche.", NULL, NULL, NULL),
(DEFAULT, 1, 2, "El perfume más rico de mi novio.", NULL, NULL, NULL),
(DEFAULT, 1, 3, "Duración increíble, me lo puse hace tres días y lo sigo oliendo en mi buzo.", NULL, NULL, NULL),
(DEFAULT, 2, 4, "Un clásico que nunca falla.", NULL, NULL, NULL),
(DEFAULT, 2, 5, "Me siento elegante cada vez que lo uso.", NULL, NULL, NULL),
(DEFAULT, 2, 6, "Ideal para la oficina.", NULL, NULL, NULL),
(DEFAULT, 3, 7, "Mi esposo no puede dejar de usarlo.", NULL, NULL, NULL),
(DEFAULT, 3, 8, "Perfecto para citas nocturnas.", NULL, NULL, NULL),
(DEFAULT, 3, 9, "Un aroma que enamora.", NULL, NULL, NULL),
(DEFAULT, 4, 10, "Lo usa todo el mundo, ya no me gusta.", NULL, NULL, NULL),
(DEFAULT, 4, 11, "El perfume favorito de mi hermano.", NULL, NULL, NULL),
(DEFAULT, 4, 12, "Ideal para el día a día.", NULL, NULL, NULL),
(DEFAULT, 5, 13, "Me transporta al mar cada vez que lo uso.", NULL, NULL, NULL),
(DEFAULT, 5, 14, "El perfume favorito de mi papá.", NULL, NULL, NULL),
(DEFAULT, 5, 15, "Perfecto para el verano.", NULL, NULL, NULL),
(DEFAULT, 6, 16, "Mi perfume favorito, me siento poderosa.", NULL, NULL, NULL),
(DEFAULT, 6, 17, "Es el favorito de mi mujer.", NULL, NULL, NULL),
(DEFAULT, 6, 18, "Elegante y sofisticado.", NULL, NULL, NULL),
(DEFAULT, 7, 19, "Un aroma único, me encanta.", NULL, NULL, NULL),
(DEFAULT, 7, 20, "El perfume favorito de mi esposo.", NULL, NULL, NULL),
(DEFAULT, 7, 21, "Perfecto para ocasiones especiales.", NULL, NULL, NULL),
(DEFAULT, 8, 22, "Mi novio huele increíble con este perfume.", NULL, NULL, NULL),
(DEFAULT, 8, 23, "Ideal para planes nocturnos.", NULL, NULL, NULL),
(DEFAULT, 8, 24, "Un aroma que no pasa desapercibido.", NULL, NULL, NULL),
(DEFAULT, 9, 2, "La fragancia de las chicas.", NULL, NULL, NULL),
(DEFAULT, 9, 25, "El favorito de mi novia.", NULL, NULL, NULL),
(DEFAULT, 9, 26, "Un aroma delicado y femenino.", NULL, NULL, NULL),
(DEFAULT, 10, 27, "Huele a recién salido de la ducha.", NULL, NULL, NULL),
(DEFAULT, 10, 1, "Ideal para climas cálidos.", NULL, NULL, NULL),
(DEFAULT, 10, 28, "Un aroma refrescante y ligero.", NULL, NULL, NULL);


UPDATE productos
SET nombre_archivo = "jean_paul_gaultier_abs.jpg"
WHERE id = 3;

UPDATE productos
SET nombre_archivo = "ysl_libre.jpg"
WHERE id = 6;

UPDATE usuarios
SET foto_perfil = "profile-default.png"
WHERE id > 0;








