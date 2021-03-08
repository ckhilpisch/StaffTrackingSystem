const conncection = require('./config/connection');
const mysql = require("mysql");
const inquirer = require("inquirer");

function startApp() {
  inquirer
    .prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'general',
      choices: ['View all Employees', 'View all Employees by Department', 'Add an Employee', 'Remove an Employee', 'Update an Employee Role', 'Update an Employee Manager']
    }
  )
    .then(function(answer) {
      if (answer.general == 'View all Employees') {
        viewEmployees();
      } else if (answer.general == 'View all Employees by Department') {
        viewByDept();
      } else if (answer.general == 'Add an Employee') {
        addEmployee();
      } else if (answer.general == 'Remove an Employee') {
        removeEmployee();
      } else if (answer.general == 'Update an Employee Role') {
        updateRole();
      } else if (answer.general == 'Update an Employee Manager') {
        updateManager();
      };
    })
}

startApp();
