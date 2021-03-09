const connection = require('./config/connection');
const mysql = require("mysql");
const inquirer = require("inquirer");
const util = require('util');
connection.query = util.promisify(connection.query);
const Department = require('./models/department');
const Employee = require('./models/employee');
const Role = require('./models/role')


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
        case 'Update an Employee':
        updateEmployee();
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

const viewEmployees = async () => {
  await Employee.getAll();
  startApp();

  // let sql =
  //   "SELECT * FROM employeetracker_db.employee";
  // connection.query(sql, function (err, res) {
  //   if (err) {
  //     console.log("Error viewing Employee table");
  //   }
  //   if (res) {
  //     console.table(res);
  //   }
  //   startApp();
  // });
  
};
const viewDept = async () => {
  await Department.getAll();
  startApp();


  
  // let sql =
  //   "SELECT * FROM employeetracker_db.department";
  // connection.query(sql, function (err, res) {
  //   if (err) {
  //     console.log("Error viewing department table");
  //   }
  //   if (res) {
  //     console.table(res);
  //   }
  //   startApp();
  // });
  
};

const viewRoles = async () => {
  await Role.getAll();
  startApp();
  // let sql =
  //   "SELECT * FROM employeetracker_db.role";
  // connection.query(sql, function (err, res) {
  //   if (err) {
  //     console.log("Error viewing Employee table");
  //   }
  //   if (res) {
  //     console.table(res);
  //   }
    
  // });
  
};

const addEmployee = async () => {
  function createArray() { 
    let sql =
    "SELECT title, id FROM employeetracker_db.role";
    return connection.query(sql);
  };
  const roleArray = await createArray();
  let newRoleArray = [];
  for (let i = 0; i < roleArray.length; i++) {
    newRoleArray.push({ 
      name : roleArray[i].title,
      value : roleArray[i].id
    })
  }


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
    choices: newRoleArray
    },
  ]).then((answer) => {
    console.log(answer);

    startApp();
  })
  
};

const updateEmployee = async () => {
  function createArray() { 
    let sql =
    "SELECT first_name, last_name, id FROM employeetracker_db.employee";
    return connection.query(sql);
  };
  const employArray = await createArray();
  console.log (employArray);
  // let newEmployArray = [];
  // for (let i = 0; i < employArray.length; i++) {
  //   newEmployArray.push({ 
  //     name : employArray[i].firstname,
  //     lastname: employArray[i].lastname,
  //     value : employArray[i].id
  //   })
  // }


  // inquirer
  // .prompt([
  //   {
  //   name: 'fName',
  //   type: 'input',
  //   message: 'What is the employees first name?'
  //   },
  //   {
  //   name: 'lName',
  //   type: 'input',
  //   message: 'What is the employees last name?'
  //   },
  //   {
  //   type: 'list',
  //   message: 'What would you like to update?',
  //   name: 'update',
  //   choices: ['First name', 'Last name', 'Role']
    
  // ]).then((answer) => {
  //   console.log(answer);
    
    startApp();
  };

  const deleteEmployee = async () => {
    function createArray() { 
      let sql =
      "SELECT first_name, last_name, id FROM employeetracker_db.employee";
      return connection.query(sql);
    };
    const employArray = await createArray();
    console.log (employArray);
  }
  //   inquirer
  // .prompt([
  //   {
  //   name: 'fName',
  //   type: 'input',
  //   message: 'What is the employees first name?',
  //   default: 'Casey'
  //   },
  //   {
  //   name: 'lName',
  //   type: 'input',
  //   message: 'What is the employees last name?',
  //   default: 'Jones'
  //   },
  //   {
  //   name: 'delete',
  //   type: 'confirm',
  //   message: 'Are you sure you would like to delete?',
  //   default: true
  //   }

  // ]).then(answers)
