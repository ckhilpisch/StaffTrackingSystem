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
};

startApp();

const viewEmployees = () => {
  let sql =
    "SELECT * FROM employeetracker_db.employee LEFT JOIN role on role.id = employee.role_id";
  connection.query(sql, function (err, res) {
    if (err) {
      console.log("Error viewing Employee table");
    }
    if (res) {
      console.table(res);
    }
    startApp();
  });
  
}


// const viewByDept = () => {
//   inquirer
//     .prompt({
//       name: 'department',
//       type: 'list',
//       message: 'Which department would you like to see?',
//       choices: ['Sales', 'Marketing', 'Engineering', 'Legal', 'Accounting']
//     }).then((answer) => {
//       switch (answer.department) {
//         case 'Sales':
//         id=1;
//         break;
//         case 'Marketing':
//         id=2;
//         case 'Engineering':
//         id=3;
//         break;
//         case 'Legal':
//         id=4;
//         break;
//         case 'Accounting':
//         id=5;
//         break;
//       }
//       const query = 'SELECT name FROM department WHERE ? JOIN role ON department.id = department_id JOIN employee ON role.id = role_id';
//       connection.query(query, { department: answer.department }, (err, res) => {
        
//         });
//         runSearch();
//       });
//     });

// };

