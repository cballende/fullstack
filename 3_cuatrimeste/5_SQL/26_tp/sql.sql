CREATE DATABASE IF NOT EXISTS `BILLING`; CREATE TABLE IF NOT EXISTS `E01_CUSTOMER`(
    `nro_customer` INT NOT NULL  INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `surn_name` VARCHAR(45) NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `status` TINYINT NOT NULL,
    PRIMARY KEY(`nro_customer`) 
); CREATE TABLE IF NOT EXISTS `E01_BILL`(
    `nro_bill` INT NOT NULL  AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `amount_without_iva` DOUBLE NOT NULL,
    `iva` DOUBLE NOT NULL,
    `amount_iva` DOUBLE NOT NULL,
    `nro_customer` INT NOT NULL,
    PRIMARY KEY(`nro_bill`),
    FOREIGN KEY(`nro_customer`) REFERENCES `E01_CUSTOMER`(`nro_customer`) ON DELETE NO ACTION ON UPDATE NO ACTION
); CREATE TABLE IF NOT EXISTS `E01_PHONE`(
    `code` INT(3) NOT NULL,
    `nro_phone` INT(7) NOT NULL,
    `type` CHAR(1),
    `nro_customer` INT NOT NULL,
    PRIMARY KEY(`code`, `nro_phone`),
    FOREIGN KEY(`nro_customer`) REFERENCES `E01_CUSTOMER`(`nro_customer`) ON DELETE NO ACTION ON UPDATE NO ACTION
); CREATE TABLE IF NOT EXISTS `E01_PRODUCT`(
    `code_product` INT NOT NULL AUTO_INCREMENT,
    `brand` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `price` FLOAT NOT NULL,
    `stock` INT NOT NULL,
    PRIMARY KEY(`code_product`)
); CREATE TABLE IF NOT EXISTS `E01_DETAIL_BILL`(
    `nro_bill` INT NOT NULL,
    `nro_item` INT NOT NULL,
    `amount` FLOAT NOT NULL,
    `code_product` INT NOT NULL,
    PRIMARY KEY(`nro_bill`, `nro_item`),
    FOREIGN KEY(`nro_bill`) REFERENCES `E01_BILL`(`nro_bill`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY(`code_product`) REFERENCES `E01_PRODUCT`(`code_product`) ON DELETE NO ACTION ON UPDATE NO ACTION
);