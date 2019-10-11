DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  product_department VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 5000", "Toys", 50.00, 100);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 4500", "Toys", 45.00, 90);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 4000", "Toys", 40.00, 80);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 3500", "Toys", 35.00, 70);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 3000", "Toys", 30.00, 60);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 2500", "Toys", 25.00, 50);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 2000", "Toys", 20.00, 40);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 1500", "Toys", 15.00, 30);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 1000", "Toys", 10.00, 20);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 500", "Toys", 5.00, 10);

INSERT INTO products (product_name, product_department, price, quantity)
VALUES ("Blast Master 1", "Toys", 1.00, 0);