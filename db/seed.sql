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
    ('John', 'Doe', 1,NULL ),
    ('Jane', 'Doe', 3, 1),
    ('Alice', 'Johnson', 6, 2),
    ('Bob', 'Smith', 5, NULL),
    ('Karen', 'Williams', 5, NULL),
    ('Kattie', 'Smith', 2, 3);

  


