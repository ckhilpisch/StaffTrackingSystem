const inquirer = require("inquirer");
// const Department = require("../models/department");
// const Employee = require("../models/employee");
// const Role = require("../models/role");

// const roleLatest = async () => {
//   const role = await Role.getAllUpdated();
//   let newRoleArray = [];
//   for (let i = 0; i < role.length; i++) {
//     newRoleArray.push({
//       name: role[i].title,
//       value: role[i].id,
//     });
//     return newRoleArray;
//   }
// };
// roleLatest();
// const employeeLatest = async () =>{
//   const employees = await Employee.getAllUpdated();
//   let newEmployArray = [];
//   for (let i = 0; i < employees.length; i++) {
//     newEmployArray.push({
//       name: employees[i].first_name + " " + employees[i].last_name,
//       value: employees[i].id,
//     });
//     return newEmployArray;
//   }
// };


const startAppQuestions = [

   { type: "list",
    message: "What would you like to do?",
    name: "general",
    choices: [
      "View Employees",
      "View Departments",
      "View Roles",
      "Add an Employee",
      "Update an Employee Role",
      "Remove an Employee",
      "Add a Role",
      "Remove a Role",
      "Add a Department",
      "Remove a Department",
      "Update an Employee Manager",
    //   "View Employees by Manager",
    ],
}
];

// const addEmployQuestions = (choices, choices2) => [
//     {
//         name: "fName",
//         type: "input",
//         message: "What is the employees first name?",
//       },
//       {
//         name: "lName",
//         type: "input",
//         message: "What is the employees last name?",
//       },
//       {
//         name: "newRole",
//         type: "list",
//         message: "What is the employees role?",
//         choices: choices,
//       },
//       {
//         name: "askManager",
//         type: "confirm",
//         message: "Would you like to add a manager?",
//         default: true
//       },
//       {
//         name: "newManager",
//         type: "list",
//         when: function (answer) {
//           return answer.askManager == true;
//         },
//         message: "Who is this employee's manager?",
//         choices: choices2
//       },
// ];

// const updateEmployQuestions = [
//     {
//         name: "update",
//         type: "list",
//         message: "Which employee would you like to update?",
//         choices: newEmployArray
//       },
//       {
//         name: "updateItem",
//         type: "list",
//         message: "What would you like to update?",
//         choices: ["First Name", "Last Name", "Role"]
//       },
//       {
//         name: "newFirst",
//         type: "input",
//         when: function (answer) {
//           return answer.updateItem == "First Name";
//         },
//         message: "What is the employee's new first name?",
//       },
//       {
//         name: "newLast",
//         type: "input",
//         when: function (answer) {
//           return answer.updateItem == "Last Name";
//         },
//         message: "What is the employee's new last name?",
//       },
//       {
//         name: "newRole",
//         type: "list",
//         when: function (answer) {
//           return answer.updateItem == "Role";
//         },
//         message: "What is the employee's new role?",
//         choices: newRoleArray,
//       },
// ];

// const removeEmployQuestions = [
  
//         {
//           name: "update",
//           type: "list",
//           message: "Which employee would you like to delete?",
//           choices: newEmployArray
//         }
// ];

// const addRoleQuestions = [
//     {
//         name: "newRole",
//         type: "input",
//         message: "What is the title of the new role?",
//       },
//       {
//         name: "newSalary",
//         type: "number",
//         message: "What is the salary of the new role?",
//       },
//       {
//         name: "newDepart",
//         type: "list",
//         message: "What is the department of the new role?",
//         choices: newDeptArray,
//       },
// ];

// const updateRoleQuestions = [
//     {
//         name: "updateRole",
//         type: "list",
//         message: "Which role would you like to update?",
//         choices: newRoleArray
//       },
//       {
//         name: "updateItem",
//         type: "list",
//         message: "What would you like to update?",
//         choices: ["Role Name", "Salary", "Department"]
//       },
//       {
//         name: "newRoleName",
//         type: "input",
//         when: function (answer) {
//           return answer.updateItem == "Role Name";
//         },
//         message: "What is the new name of the role?",
//       },
//       {
//         name: "newSalaryt",
//         type: "number",
//         when: function (answer) {
//           return answer.updateItem == "Salary";
//         },
//         message: "What is the new salary for this role?",
//       },
//       {
//         name: "newDept",
//         type: "list",
//         when: function (answer) {
//           return answer.updateItem == "Department";
//         },
//         message: "What is this role's new department?",
//         choices: newDeptArray,
//       },
// ];

// const removeRoleQuestions = [
//     {
//         name: "deleteRole",
//         type: "list",
//         message: "Which role would you like to delete?",
//         choices: newRoleArray
//       },
// ];

const addDeptQuestions = [
    {
        name: "newDept",
        type: "input",
        message: "What is the title of the new department?",
      },
];

// const removeDeptQuestions = [
//     {
//         name: "deleteDept",
//         type: "list",
//         message: "Which department would you like to delete?",
//         choices: newDeptArray
//       },
// ];

// const updateManagerQuestions = [
//     {
//         name: "update",
//         type: "list",
//         message: "Which employee's manager would you like to update?",
//         choices: newEmployArray
//       },
//       {
//         name: "newManager",
//         type: "list",
//         message: "Who is the employee's new manager?",
//         choices: newEmployArray
//       },
// ];


module.exports = {
    startAppQuestions,
    // addEmployQuestions,
    // updateEmployQuestions,
    // removeEmployQuestions,
    // addRoleQuestions,
    // updateRoleQuestions,
    // removeRoleQuestions,
    addDeptQuestions,
    // removeDeptQuestions,
    // updateManagerQuestions
};
