const inquirer = require('inquirer');
const pool = require('./db/connection');
const { viewDepartments, addDepartment, viewRoles, addRole } = require('./queries');

function run() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['View All Departments', 'Add Department', 'View All Roles', 'Add Role', 'Exit']
        })
        .then(({ action }) => {
            switch (action) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
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
                case 'Exit':
                    pool.end();
                    break;
            }
        });
}

module.exports = run;
