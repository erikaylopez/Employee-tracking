INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales')

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 60000, 4),
    ('Salesperson', 45000, 4),
    ('Lead Engineer', 80000, 1),
    ('Software Engineer', 60000, 1),
    ('Accountant', 70000, 2),
    ('Legal Team Lead', 75000, 3),
    ('Lawyer', 70000, 3)
 
 INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Luis', 'Lopez', 3),
    ('John', 'Doe', 1, 1),
    ('Jane', 'Doe', 2, 1),
    ('Alice', 'Johnson', 4, 3),
    ('Bob', 'Smith', 5, 3),
    ('Karen', 'Williams', 6, 3),
    ('Kattie', 'Smith', 7, 3)
