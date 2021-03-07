INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Accounting");

INSERT INTO role (title, salary, department_id) VALUES ("Social Media Manager", 51406, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Digital Marketing Director", 90405, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Support", 44877, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Account Sales Manager", 62236, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Junior Software Developer", 64056, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Senior Software Developer", 92345, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Chief Technology Officer", 44877, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Legal Analyst", 51918, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Legal Director", 175330, 4);
INSERT INTO role (title, salary, department_id) VALUES ("General Accountant", 53160, 5);
INSERT INTO role (title, salary, department_id) VALUES ("Accounting Supervisor", 84827, 5);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Carolyn", "Hilpisch", 2, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Rebecca", "Norgaard-Peterson", 3, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Khang", "Nguyen", null, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Jenn", "Brunner", 5, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Michael", "Buckelew", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Sara", "Blascyk", 7, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Johnny", "Grzeskowiak", null, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Brianna", "Sadler", 9, 8);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("James", "Leon", null, 9);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ("Andrea", "Hintz", null, 11);