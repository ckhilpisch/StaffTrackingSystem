const connection = require('./config/connection');
const mysql = require("mysql");
const inquirer = require("inquirer");

 const startApp = () => {
  inquirer
    .prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'general',
      choices: ['View all Employees', 'View all Employees by Department', 'Add an Employee', 'Remove an Employee', 'Update an Employee Role', 'Update an Employee Manager']
    }
  )
    .then((answer) => {
      switch (answer.general) {
        case 'View all Employees':
        viewEmployees();
        break;
        case 'View all Employees by Department':
        viewByDept();
        case 'Add an Employee':
        addEmployee();
        break;
        case 'Remove an Employee':
        removeEmployee();
        break;
        case 'Update an Employee Role':
        updateRole();
        break;
        case 'Update an Employee Manager':
        updateManager();
      }
    });
  // startApp();
};

startApp();
