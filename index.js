const express = require('express');
const { Pool } = require('pg');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

let employees = [];
let roles = [];
let managers = [];
let departments = [];

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool({
  // TODO: Enter PostgreSQL username
  user: 'erikaylopez',
  // TODO: Enter PostgreSQL password
  password: 'Erika#1009',
  host: 'localhost',
  database: 'employees_db'
});

pool.connect();

pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function ({rows}) {
  console.log(rows);
});

pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function ({rows}) {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


function run() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit']
        })  
        .then(({ action }) => {
            switch (action) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Exit':
                    pool.end();
                    break;
            }
        });
}

function viewDepartments() {
    pool.query('SELECT name FROM department', async function(err, { rows }) {
        console.table(rows);
        return run();
    });
}

function addDepartment() {
    inquirer
        .prompt({

        })

}

function viewRoles() {
    pool.query('SELECT title, salary, department_id FROM role', async function(err, { rows }) {
        console.table(rows);
        return run();
    });
}

function addRole() {
    pool.query('SELECT name AS value FROM department', async function({ rows }) {
        const departments = rows;
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the title of the role?',
                    name: 'title'
                },
                {
                    type: 'input',
                    message: 'What is the salary of the role?',
                    name: 'salary'
                },
                {
                    type: 'list',
                    message: 'What department does the role belong to?',
                    name: 'department',
                    choices: departments
                }
            ])
            .then(({ title, salary, department }) => {
                const departmentId = departments.find(row => row.name === department).value;
                pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId], function(err) {
                    if (err) throw err;
                    console.log('Role added!');
                    return run();
                });
            });
    });
}

function updateEmployeeRole() {

}
function addEmployee() {
    pool.query('SELECT title, id FROM role', async function(err, { rows }) {
        const roles = rows;
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the employee\'s first name?',
                    name: 'firstName'
                },
                {
                    type: 'input',
                    message: 'What is the employee\'s last name?',
                    name: 'lastName'
                },
                {
                    type: 'list',
                    message: 'What is the employee\'s role?',
                    name: 'role',
                    choices: roles
                }
            ])
            .then(({ firstName, lastName, role }) => {
                const roleId = roles.find(row => row.title === role).id;
                pool.query('INSERT INTO employee (first_name, last_name, role_id) VALUES ($1, $2, $3)', [firstName, lastName, roleId], function(err) {
                    if (err) throw err;
                    console.log('Employee added!');
                    return run();
                });
            });
    });
}

run();







