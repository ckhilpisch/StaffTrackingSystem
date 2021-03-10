const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const util = require("util");
connection.query = util.promisify(connection.query);
const Department = require("./models/department");
const Employee = require("./models/employee");
const Role = require("./models/role");
const { promises } = require("fs");
const { type } = require("jquery");

const startApp = () => {
  console.log("start app");
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "general",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add an Employee",
        "Update an Employee",
        "Remove an Employee",
        "Add an Role",
        "Update a Role",
        "Remove a Role",
        "Add a Department",
        "Update a Depatment",
        "Remove a Department",
        "View Employees by Manager",
        "Update an Employee Manager",
      ],
    })
    .then((answer) => {
      switch (answer.general) {
        case "View Employees":
          viewEmployees();
          break;
        case "View Departments":
          viewDept();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee":
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
  const employ = await Employee.getAll();
  console.table(employ);
  startApp();
};
const viewDept = async () => {
  const dept = await Department.getAll();
  console.table(dept);
  startApp();
};

const viewRoles = async () => {
  const role = await Role.getAll();
  console.table(role);
  startApp();
};

const addEmployee = async () => {
  const role = await Role.getAllUpdated();
  let newRoleArray = [];
  for (let i = 0; i < role.length; i++) {
    newRoleArray.push({
      name: role[i].title,
      value: role[i].id,
    });
  }

  const employees = await Employee.getAllUpdated();
  let newEmployArray = [];
  for (let i = 0; i < employees.length; i++) {
    newEmployArray.push({
      name: employees[i].first_name + " " + employees[i].last_name,
      value: employees[i].id,
    });
    console.log(newEmployArray);
  }
  inquirer
    .prompt([
      {
        name: "fName",
        type: "input",
        message: "What is the employees first name?",
      },
      {
        name: "lName",
        type: "input",
        message: "What is the employees last name?",
      },
      {
        name: "newRole",
        type: "list",
        message: "What is the employees role?",
        choices: newRoleArray,
      },
      {
        name: "askManager",
        type: "confirm",
        message: "Would you like to add a manager?",
        default: true
      },
      {
        name: "newManager",
        type: "list",
        when: function (answer) {
          return answer.askManager == true;
        },
        message: "Who is this employee's manager?",
        choices: newEmployArray
      },
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};
const updateEmployee = async () => {
  const role = await Role.getAllUpdated();
  let newRoleArray = [];
  for (let i = 0; i < role.length; i++) {
    newRoleArray.push({
      name: role[i].title,
      value: role[i].id,
    });
  }

  const employees = await Employee.getAllUpdated();
  let newEmployArray = [];
  for (let i = 0; i < employees.length; i++) {
    newEmployArray.push({
      name: employees[i].first_name + " " + employees[i].last_name,
      value: employees[i].id,
    });
    console.log(newEmployArray);
  }
  inquirer
    .prompt([
      {
        name: "update",
        type: "list",
        message: "Which employee would you like to update?",
        choices: newEmployArray
      },
      {
        name: "updateItem",
        type: "list",
        message: "What would you like to update?",
        choices: ["First Name", "Last Name", "Role"]
      },
      {
        name: "newFirst",
        type: "input",
        when: function (answer) {
          return answer.updateItem == "First Name";
        },
        message: "What is the employee's new first name?",
      },
      {
        name: "newLast",
        type: "input",
        when: function (answer) {
          return answer.updateItem == "Last Name";
        },
        message: "What is the employee's new last name?",
      },
      {
        name: "newRole",
        type: "list",
        when: function (answer) {
          return answer.updateItem == "Role";
        },
        message: "What is the employee's new role?",
        choices: newRoleArray,
      },
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};
