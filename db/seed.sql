INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales')

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 60000, 1)
    ('Salesperson', 45000, 2)
    ('Lead Engineer', 80000, 3)
    ('Software Engineer', 60000, 4)
    ('Accountant', 70000, 5)
    ('Legal Team Lead', 75000, 6)
    ('Lawyer', 70000, 7)

    SELECT * FROM roles;
 
 INSERT INTO employee (first_name, last_name, manager_id_id,)
VALUES
    ('Luis', 'Lopez', 7,2)
    ('John', 'Doe', 1, 1 )
    ('Jane', 'Doe', 3, 4)
    ('Alice', 'Johnson', 6, 5)
    ('Bob', 'Smith', 5, NULL)
    ('Karen', 'Williams', 5, NULL)
    ('Kattie', 'Smith', 2, 1)

    SELECT * FROM employee;


