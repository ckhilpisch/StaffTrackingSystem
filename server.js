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
const questions = require("./utils/questions");
const CFonts = require('cfonts');
const chalk = require('chalk');

CFonts.say('STAFF STUFF', {
  font: 'block',              
  align: 'left',           
  colors: ['red','magentaBright'],         
  background: 'transparent',  
  letterSpacing: 1,           
  lineHeight: 1,              
  space: true,                
  maxLength: '0',             
  gradient: false,          
  independentGradient: false, 
  transitionGradient: true,  
  env: 'node'                 
});
const startApp = () => {
  inquirer.prompt(questions.startAppQuestions).then((answer) => {
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
      case "Update an Employee Role":
        updateRole();
        break;
      case "Remove an Employee":
        removeEmployee();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Remove a Role":
        removeRole();
        break;
      case "Add a Department":
        addDept();
        break;
      case "Remove a Department":
        removeDept();
        break;
      case "Update an Employee Manager":
        updateManager();
        break;
      // case "View Employees by Manager":
      //   viewManager();
      //   break;
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
        choices: role,
      },
    ])
    .then((answers) => {
      let first_name = answers.fName;
      let last_name = answers.lName;
      let role_id = answers.newRole;
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id) VALUES ('" +
          first_name +
          "', '" +
          last_name +
          "', '" +
          role_id +
          "')",
        function (err, res) {
          if (err) {
            console.log(chalk.red("error creating employee"));
          } else if (res) {
            console.log(chalk.magentaBright(
              "You created a new employee named " +
                first_name + " " +
                last_name +
                "!!!! \n \n"
            ));
          }
          startApp();
        }
      );
    });
};
const updateRole = async () => {
  const role = await Role.getAllUpdated();
  const employees = await Employee.getAllUpdated();
  let newEmployArray = [];
  for (let i = 0; i < employees.length; i++) {
    newEmployArray.push({
      name: employees[i].first_name + " " + employees[i].last_name,
      value: employees[i].id,
    });
  }
  inquirer
    .prompt([
      {
        name: "update",
        type: "list",
        message: "Which employee would you like to update?",
        choices: newEmployArray,
      },
      {
        name: "newRole",
        type: "list",
        message: "What is the employee's new role?",
        choices: role,
      },
    ])
    .then((answers) => {
      let employee = answers.update;
      let role = answers.newRole;
      connection.query(
        "UPDATE employee SET role_id =" +
          role +
          "  WHERE id = " + employee,
        function (err, res) {
          if (err) {
            console.log(err);
          } else if (res) {
            console.log(chalk.magentaBright(
              "You updated the role of your employee!\n \n"
            ));
          }
          startApp();
        }
      );
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
  }
  inquirer
    .prompt([
      {
        name: "update",
        type: "list",
        message: "Which employee would you like to delete?",
        choices: newEmployArray,
      },
    ])
    .then((answers) => {
      console.log(answers);
      id = answers.update;
      connection.query(
        "DELETE FROM employee WHERE id ="+ id + "",
        function (err, res) {
          if (err) {
            console.log(chalk.redBright("Error deleting employee"));
          } else if (res) {
            console.log(chalk.magentaBright("You deleted your employee!\n \n"));
          }
          startApp();
        }
      );
    });
};

const addRole = async () => {
  const department = await Department.getAll();
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
        choices: department,
      },
    ])
    .then((answers) => {
      let title = answers.newRole;
      let department_id = answers.newDepart;
      let salary = answers.newSalary;
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES ('" +
          title +
          "', '" +
          salary +
          "', '" +
          department_id +
          "')",
        function (err, res) {
          if (err) {
            console.log(chalk.redBright("error creating role"));
          } else if (res) {
            console.log(chalk.magentaBright("You created a new role named " + title + "!\n \n"));
          }
          startApp();
        }
      );
    });
};

const removeRole = async () => {
  const role = await Role.getAllUpdated();
  inquirer
    .prompt([
      {
        name: "deleteRole",
        type: "list",
        message: "Which role would you like to delete?",
        choices: role,
      },
    ])
    .then((answers) => {
      console.log(answers);
      let id = answers.deleteRole;
      connection.query(
        "DELETE FROM role WHERE id ="+ id + "",
        function (err, res) {
          if (err) {
            console.log(chalk.redBright("There was an error.  Role not deleted"));
          } else if (res) {
            console.log(chalk.magentaBright("You deleted the role!\n \n"));
          }
          startApp();
        }
      );
    });
};
const addDept = async () => {
  inquirer.prompt(questions.addDeptQuestions).then((answers) => {
    let name = answers.newDept;
    connection.query(
      "INSERT INTO department (name) VALUES ('" + name + "')",

      function (err, res) {
        if (err) {
          console.log(chalk.redBright("Error creating new department"));
        } else if (res) {
          console.log(chalk.magentaBright("You created a new department called " + name + "!\n \n"));
        }
        startApp();
      }
    );
  });
};

const removeDept = async () => {
  const department = await Department.getAll();
  inquirer
    .prompt([
      {
        name: "deleteDept",
        type: "list",
        message: "Which department would you like to delete?",
        choices: department,
      },
    ])
    .then((answers) => {
      console.log(answers);
      let id = answers.deleteDept;
      connection.query(
        "DELETE FROM department WHERE id = "+ id + "",
        function (err, res) {
          if (err) {
            console.log(chalk.redBright("Error deleting department"));
          } else if (res) {
            console.log(chalk.magentaBright("You deleted the department! \n \n"));
          }
          startApp();
        }
      );
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
  }
  inquirer
    .prompt([
      {
        name: "update",
        type: "list",
        message: "Which employee's manager would you like to update?",
        choices: newEmployArray,
      },
      {
        name: "newManager",
        type: "list",
        message: "Who is the employee's new manager?",
        choices: newEmployArray,
      },
    ])
    .then((answers) => {
      let id = answers.update;
      let manager_id = answers.newManager;
      connection.query(
        "UPDATE employee SET manager_id = '" +
          manager_id +
          "' WHERE id = '" +
          id +
          "'",
        function (err, res) {
          if (err) {
            console.log(chalk.redBright("error updating manager"));
          } else if (res) {
            console.log(chalk.magentaBright("You added a new manager to your employee!! \n \n"));
          }
          startApp();
        }
      );
    });
};
