CREATE DATABASE IF NOT EXISTS 'Empresa';

CREATE TABLE IF EXISTS 'Empleados'(
  'id' INT NOT NULL AUTO_INCREMENT,
  'nombre' VARCHAR(45) NOT NULL,
  'edad' INT(3) NOT NULL,
  'salario' FLOAT NOT NULL,
  PRIMARY KEY ('id')
);

INSERT INTO Empleados ( nombre,edad,salario ) VALUES 
('alguien algo', 23, 400400.3 ),
('alguien1 algo1', 23, 400500.3 ),
('alguien2 algo2', 23, 400600.3 );

SELECT * FROM Empleados WHERE salario > 50000;

UPDATE Empleados SET edad=24 WHERE id=2;

DELETE FROM Empleados SET WHERE id=3;

SELECT COUNT(id) FROM Empleados WHERE salario>0;

SELECT * FROM Empleados WHERE nombre LIKE "A%";

CREATE TABLE IF EXISTS 'Empleados'(
  'id' INT NOT NULL AUTO_INCREMENT,
  'nombre' VARCHAR(45) NOT NULL,
  'edad' INT(3) NOT NULL,
  'salario' FLOAT NOT NULL,
  PRIMARY KEY ('id')
);

CREATE TABLE IF EXISTS 'Departamentos'(
  'id' INT NOT NULL AUTO_INCREMENT,
  'nombre' VARCHAR(45) NOT NULL,
  'ubicacion' VARCHAR(45) NOT NULL,
  PRIMARY KEY ('id')
);

ALTER TABLE 'Emplados' ADD 'departamento_id' INT NOT NULL AUTO_INCREMENT;
ALTER TABLE 'Emplados' ADD FOREIGN KEY (departamento_id) REFERENCES Departamentos(id);

SELECT AVG('salario') FROM Empleados WHERE salario>0 GROUP BY departamento_id;

SELECT * FROM Empleados WHERE salario>0 ORDER BY edad DESC;

SELECT * FROM Empleados WHERE salario>0 BETWEEN 25 AND 40;

SELECT * FROM Empleados WHERE salario>0 ORDER BY salario DESC LIMIT 3;



/*Colección Vuelos*/
use reservasDB;
db.vuelos.insertMany([
  {brand: "Aerean", destiny:[{country:"Argentina",city:"Buenos Aires"}] , date: "2025-12-04"},
  {brand: "VueloSi", destiny:[{country:"Brasil",city:"Puerto Algo"}], date: "2025-7-01"},
  {brand: "FreeLanding", destiny:[{country:"Islandia",city:"Heirabik"}], date: "2025-6-10"}
]);

/*Migración*/

db.usuarios.createCollection("usuarios",{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user_id,name","email"],
      properties:{
        name : {
          bsonType: "string",
          minLength: 2,
          minLength: 100,
        },
        email:{
          bsonType: "string",
          format: "email",
          unique: true
        }
      }
    }
  }
});

db.usuarios.createCollection("pedidos",{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario","total"],
      properties:{
        usuario_id : {
          bsonType: "number",
          minimum: 1,
          maximum: 1000000,
        },
        total:{
          bsonType: "number",
          multipleOf: 0.01,
          minimum: 0,
          maximum: 10000000.00
        }
      }
    }
  }
});
