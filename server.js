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
        "Add a Role",
        "Update a Role",
        "Remove a Role",
        "Add a Department",
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
        break;
        case 'Remove an Employee':
        removeEmployee();
        break;
        case 'Add a Role':
        addRole();
        break;
        case 'Update a Role':
        updateRole();
        break;
        case 'Remove a Role':
        removeRole();
        break;
        case 'Add a Department':
        addDept();
        break;
        case 'Remove a Department':
        removeDept();
        break;
        case 'View Employees by Manager':
        viewManager();
        break;
        case 'Update an Employee Manager':
        updateManager();
        break;
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

const removeEmployee = async () => {
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
        message: "Which employee would you like to delete?",
        choices: newEmployArray
      }
    ]).then((answer) => {
      console.log(answer);

      startApp();

    });
};

const addRole = async () => {
  const role = await Role.getAllUpdated();
  let newRoleArray = [];
  for (let i = 0; i < role.length; i++) {
    newRoleArray.push({
      name: role[i].title,
      value: role[i].id,
    });
    
  }
  console.log(newRoleArray)

  const department = await Department.getAll();
  let newDeptArray = [];
  for (let i = 0; i < department.length; i++) {
    newDeptArray.push({
      name: department[i].name,
      value: department[i].id,
    });
  }
  console.log(newDeptArray);
  inquirer
    .prompt([
      {
        name: "newRole",
        type: "input",
        message: "What is the title of the new role?",
      },
      {
        name: "newSalary",
        type: "number",
        message: "What is the salary of the new role?",
      },
      {
        name: "newDepart",
        type: "list",
        message: "What is the department of the new role?",
        choices: newDeptArray,
      },
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};

const updateRole = async () => {
  const role = await Role.getAllUpdated();
  let newRoleArray = [];
  for (let i = 0; i < role.length; i++) {
    newRoleArray.push({
      name: role[i].title,
      value: role[i].id,
    });
    
  }
  console.log(newRoleArray)

  const department = await Department.getAll();
  let newDeptArray = [];
  for (let i = 0; i < department.length; i++) {
    newDeptArray.push({
      name: department[i].name,
      value: department[i].id,
    });
  }
  console.log(newDeptArray);
  inquirer
    .prompt([
      {
        name: "updateRole",
        type: "list",
        message: "Which role would you like to update?",
        choices: newRoleArray
      },
      {
        name: "updateItem",
        type: "list",
        message: "What would you like to update?",
        choices: ["Role Name", "Salary", "Department"]
      },
      {
        name: "newRoleName",
        type: "input",
        when: function (answer) {
          return answer.updateItem == "Role Name";
        },
        message: "What is the new name of the role?",
      },
      {
        name: "newSalaryt",
        type: "number",
        when: function (answer) {
          return answer.updateItem == "Salary";
        },
        message: "What is the new salary for this role?",
      },
      {
        name: "newDept",
        type: "list",
        when: function (answer) {
          return answer.updateItem == "Department";
        },
        message: "What is this role's new department?",
        choices: newDeptArray,
      },
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};

const removeRole= async () => {
  const role = await Role.getAllUpdated();
  let newRoleArray = [];
  for (let i = 0; i < role.length; i++) {
    newRoleArray.push({
      name: role[i].title,
      value: role[i].id,
    });
    
  }
  inquirer
    .prompt([
      {
        name: "deleteRole",
        type: "list",
        message: "Which role would you like to delete?",
        choices: newRoleArray
      },
    ]).then((answer) => {
      console.log(answer);

      startApp();

    });
};
const addDept = async () => {
  const department = await Department.getAll();
  let newDeptArray = [];
  for (let i = 0; i < department.length; i++) {
    newDeptArray.push({
      name: department[i].name,
      value: department[i].id,
    });
  }
  console.log(newDeptArray);

  inquirer
    .prompt([
      {
        name: "newDept",
        type: "input",
        message: "What is the title of the new department?",
      },
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};

const removeDept= async () => {
  const department = await Department.getAll();
  let newDeptArray = [];
  for (let i = 0; i < department.length; i++) {
    newDeptArray.push({
      name: department[i].name,
      value: department[i].id,
    });
  }
  inquirer
    .prompt([
      {
        name: "deleteDept",
        type: "list",
        message: "Which department would you like to delete?",
        choices: newDeptArray
      },
    ]).then((answer) => {
      console.log(answer);

      startApp();

    });
};

const updateManager = async () => {
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
        message: "Which employee's manager would you like to update?",
        choices: newEmployArray
      },
      {
        name: "newManager",
        type: "list",
        message: "Who is the employee's new manager?",
        choices: newEmployArray
      },
      
    ])
    .then((answer) => {
      console.log(answer);

      startApp();
    });
};


