// const inquirer = require("inquirer");
// const mysql = require("mysql");



// function viewEmployees() {
//   let sql =
//     "SELECT * FROM employeetracker_db.employee LEFT JOIN role on role.id = employee.role_id";
//   connection.query(sql, function (err, res) {
//     if (err) {
//       console.log("Error viewing Employee table");
//     }
//     if (res) {
//       console.table(res);
//     }
//   });
// }

// function viewByDept() {
//   inquirer
//   .prompt({
//     type: 'list',
//     message: 'What department would you like to see?',
//     name: 'department',
//     choices: ['Sales', 'Marketing', 'Engineering', 'Legal', 'Accounting']
//   }).then(function(answer) {
//     if (answer.departemnt == 'Sales') {
//       then (role_id=1);
//     } else if (answer.departemnt == 'Marketing') {
//       then (role_id=2);
//     } else if (answer.departemnt == 'Engineering') {
//       then (role_id=3);
//     } else if (answer.departemnt == 'Legal') {
//       then (role_id=4);
//     } else if (answer.departemnt == 'Accounting') {
//       then (role_id=5);
//     };
//   })
//   let sql =
//     "SELECT * FROM employeetracker_db.employee LEFT JOIN role on role.id = employee.role_id";
//   connection.query(sql, function (err, res) {
//     if (err) {
//       console.log("Error viewing Department Table");
//     }
//     if (res) {
//       console.table(res);
//     }
//   });
// };
// //function to add employee:
// addEmployee();
// inquirer
//   .prompt({
//     type: 'input',
//     message: "What is the Employee's first name?",
//     name: 'firstName',
//     default: "John"
//   },
//   {
//     type: 'input',
//     message: "What is the Employee's last name?",
//     name: 'lastName',
//     default: "Doe"
//   },
//   {
//     type: 'input',
//     message: "What is the Employee's role?",
//     name: 'role',
//     default: "Worker"
//   },
//   ).then(function(answers) {
//     let first = ${answers.firstName};
//     let last = ${answers.lastName}; 
//     let sql =
//     "INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES ('first', 'last', 
//     2, 5)"

// //function to remove an employee:
// const removeEmployee = async function (err, res){
//   const ans1 = await inquirer.prompt([
//     {
//       type: 'input',
//       message: "What is the Employee's first name?",
//       name: 'firstName',
//       default: "John"
//     },
//   ]);
//   const ans2 = await inquirer.prompt([
//     {
//       type: 'input',
//       message: "What is the Employee's last name?",
//       name: 'lastName',
//       default: "Doe"
//     },
//   ]);
//   const ans3 = await inquirer.prompt([
//     {
//       type: 'confirm',
//       message: "Are you sure you want to delete" + ans1 + ans2 + "?",
//       name: 'role',
//       default: "Worker"
//     },
//   ]);
// return{ans1, ans2};
// }
//   .then(function(answers) {
//   let ans1 = first_name;
//   let ans2 = las_name;
//   let sql =
//     "DELETE * FROM employeetracker_db.employee (first_name, last_name, role_id, manager_id,) VALUES (?,?)
//     [
//       ans1,
//       ans2,
//       null, 
//       ans3
//     ]
//   connection.query(sql, function (err, res) {
//     if (err) {
//       console.log("Error viewing Employee table");
//     }
//     if (res) {
//       console.table(res);
//     }
//   });

//   }


// //function to update an employee role:
// updateRole();
// //function to update a manager:
// updateManager();
