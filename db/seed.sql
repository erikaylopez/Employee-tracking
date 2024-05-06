INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');



INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 60000, 1),
    ('Salesperson', 45000, 2),
    ('Lead Engineer', 80000, 3),
    ('Software Engineer', 60000, 4),
    ('Accountant', 70000, 1),
    ('Legal Team Lead', 75000, 2),
    ('Lawyer', 70000, 3);


 
 INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Luis', 'Lopez', 5,NULL),
    ('John', 'Doe', 1,3 ),
    ('Jane', 'Doe', 3, NULL),
    ('Alice', 'Johnson', 6, 2),
    ('Bob', 'Smith', 5, NULL),
    ('Karen', 'Williams', 5, NULL),
    ('Kattie', 'Smith', 2, 1);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT title, salary, employee.first_name, employee.last_name || ' ' ||, employee.name, manager.first_name || ' ' || manager.last_name 
AS manager FROM employee 
JOIN employee manager ON employee.manager_id = manager.id
JOIN role ON employee.role_id = role.id;
  

