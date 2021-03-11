DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NULL,
PRIMARY KEY(id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NULL,
salary DECIMAL(10,2),
department_id INT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
manager_id INT NULL,
role_id INT NULL,
PRIMARY KEY (id),
FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE 
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
); 
