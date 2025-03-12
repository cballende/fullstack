CREATE DATABASE IF NOT EXISTS `BILLING`; CREATE TABLE IF NOT EXISTS `E01_CUSTOMER`(
    `nro_customer(PK)` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `surn_name` VARCHAR(45) NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `status` TINYINT NOT NULL,
    PRIMARY KEY(`nro_customer(PK)`)
); CREATE TABLE IF NOT EXISTS `E01_BILL`(
    `nro_bill(PK)` INT NOT NULL,
    `date` DATE NOT NULL,
    `amount_without_iva` DOUBLE NOT NULL,
    `iva` DOUBLE NOT NULL,
    `amount_iva` DOUBLE NOT NULL,
    `nro_customer(FK)` INT NOT NULL,
    PRIMARY KEY(`nro_bill(PK)`),
    FOREIGN KEY(`nro_customer(FK)`) REFERENCES `E01_CUSTOMER`(`nro_customer(PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
); CREATE TABLE IF NOT EXISTS `E01_PHONE`(
    `code(PK)` INT(3) NOT NULL,
    `nro_phone(PK)` INT(7) NOT NULL,
    `type` CHAR(1),
    `nro_customer(FK)` INT NOT NULL,
    PRIMARY KEY(`code(PK)`, `nro_phone(PK)`),
    FOREIGN KEY(`nro_customer(FK)`) REFERENCES `E01_CUSTOMER`(`nro_customer(PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
); CREATE TABLE IF NOT EXISTS `E01_PRODUCT`(
    `code_product(PK)` INT NOT NULL,
    `brand` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `price` FLOAT NOT NULL,
    `stock` INT NOT NULL,
    PRIMARY KEY(`code_product(PK)`)
); CREATE TABLE IF NOT EXISTS `E01_DETAIL_BILL`(
    `nro_bill(FK)(PK)` INT NOT NULL,
    `nro_item(PK)` INT NOT NULL,
    `amount` FLOAT NOT NULL,
    `code_product(FK)` INT NOT NULL,
    PRIMARY KEY(`nro_bill(FK)(PK)`, `nro_item(PK)`),
    FOREIGN KEY(`nro_bill(FK)(PK)`) REFERENCES `E01_BILL`(`nro_bill(PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY(`code_product(FK)`) REFERENCES `E01_PRODUCT`(`code_product(PK)`) ON DELETE NO ACTION ON UPDATE NO ACTION
);