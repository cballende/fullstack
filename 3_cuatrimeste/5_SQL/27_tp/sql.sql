SELECT * FROM E01_CLIENTE;
SELECT * FROM E01_PRODUCTO WHERE marca='Dolor Sit Incorporated';
SELECT * FROM E01_PRODUCTO ORDER BY nombre ASC;

INSERT INTO E01_PRODUCTO (
        codigo_producto,
        marca,
        nombre,
        descripcion,
        precio,
        stock
        )
VALUES (
    	146464,
        'Pasto',
        'Rico',
        'Saludable',
        60000,
        300
        );


UPDATE E01_PRODUCTO 
SET precio= 49.99
WHERE codigo_producto=5;

DELETE FROM E01_PRODUCTO
WHERE codigo_producto=3;

SELECT * FROM E01_PRODUCTO WHERE precio BETWEEN 10 AND 50;
SELECT * FROM E01_PRODUCTO WHERE  precio > (SELECT AVG(precio) FROM E01_PRODUCTO);

UPDATE E01_PRODUCTO 
SET precio= precio + 5
WHERE marca='Nulla Dignissim Institute';

SELECT * FROM E01_TELEFONO WHERE codigo_area<>844 AND nro_telefono>4369984 AND tipo='F';

SELECT * FROM E01_PRODUCTO ORDER BY precio DESC LIMIT 10;

SELECT * FROM E01_FACTURA WHERE fecha LIKE '2016';


INSERT INTO E01_PRODUCTO (
    	codigo_producto,
        marca,
        nombre,
        descripcion,
        precio,
        stock
        )
VALUES (
    	122322,
        'ACME',
        'Nuevo Producto',
        'calido',
        29.99,
        1
        );

UPDATE E01_PRODUCTO 
SET precio= precio * 1.05
WHERE precio<50 OR nombre LIKE 'descuento';

SELECT * FROM E01_TELEFONO WHERE nro_telefono<=4892549 AND tipo<>'F';