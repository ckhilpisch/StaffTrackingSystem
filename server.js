const connection = require('./config/connection');
const mysql = require("mysql");
const inquirer = require("inquirer");



 const startApp = () => {
  inquirer
    .prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'general',
      choices: ['View Employees', 'View Departments','View Roles', 'Add an Employee', 'Update an Employee','Remove an Employee','Add an Role', 'Update a Role','Remove a Role', 'Add a Department', 'Update a Depatment','Remove a Department','View Employees by Manager', 'Update an Employee Manager']
    }
  )
    .then((answer) => {
      switch (answer.general) {
        case 'View Employees':
        viewEmployees();
        break;
        case 'View Departments':
        viewDept();
        break;
        case 'View Roles':
        viewRoles();
        break;
        case 'Add an Employee':
        addEmployee();
        break;
        // case 'Update an Employee':
        // updateEmployee();
        // break;
        // case 'Remove an Employee':
        // removeEmployee();
        // break;
        // case 'Add a Role':
        // addRole();
        // break;
        // case 'Update a Role':
        // updateRole();
        // break;
        // case 'Remove a Role':
        // removeRole();
        // break;
        // case 'Add an Department':
        // addDept();
        // break;
        // case 'Update an Department':
        // updateDept();
        // break;
        // case 'Remove an Department':
        // removeDept();
        // break;
        // case 'View Employees by Manager':
        // viewManager();
        // break;
        // case 'Update an Employee Manager':
        // updateManager();
        // break;
      }
    });
};

startApp();

const viewEmployees = () => {
  let sql =
    "SELECT * FROM employeetracker_db.employee";
  connection.query(sql, function (err, res) {
    if (err) {
      console.log("Error viewing Employee table");
    }
    if (res) {
      console.table(res);
    }
    startApp();
  });
  
};
const viewDept = () => {
  let sql =
    "SELECT * FROM employeetracker_db.department";
  connection.query(sql, function (err, res) {
    if (err) {
      console.log("Error viewing department table");
    }
    if (res) {
      console.table(res);
    }
    startApp();
  });
  
};
const viewRoles = () => {
  let sql =
    "SELECT * FROM employeetracker_db.role";
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
const addEmployee = async () => {
  function createArray() { 
    let sql =
    "SELECT title FROM employeetracker_db.role";
  connection.query(sql, function (err, res) {
    if (err) throw err;
    if (res) {
      let deptArray = res;
      return deptArray;
    }
  });
  };
  await createArray();
  inquirer
  .prompt([
    {
    name: 'fName',
    type: 'input',
    message: 'What is the employees first name?'
    },
    {
    name: 'lName',
    type: 'input',
    message: 'What is the employees last name?'
    },
    {  
    name: 'newRole',
    type: 'list',
    message: 'What is the employees role?',
    choices: deptArray
    },
  ]).then((answer) => {
    console.log(answer);
    startApp();
  })
  
};

// const viewDept = () => {
//   inquirer
//     .prompt({
//       name: 'department',
//       type: 'list',
//       message: 'Which department would you like to see?',
//       choices: ['Sales', 'Marketing', 'Engineering', 'Legal', 'Accounting']
//     }).then((answer) => {
//       switch (answer.department) {
//         case 'Sales':
//         viewSales();
//         break;
//         case 'Marketing':
//         viewMarketing();
//         break;
//         case 'Engineering':
//         viewEngineering();
//         break;
//         case 'Legal':
//         viewLegal();
//         break;
//         case 'Accounting':
//         viewAccounting();
//         break;
//       }
//       const query = 'SELECT name FROM department WHERE ? JOIN role ON department.id = department_id JOIN employee ON role.id = role_id';
//       connection.query(query, { name: answer.department }, (err, res) => {
//         if (err) {
//           console.log("Error viewing Employee table by Department");
//         }
//         if (res) {
//           console.table(res);
//         }
//         startApp();
        
//         });
        
//     });
// };


