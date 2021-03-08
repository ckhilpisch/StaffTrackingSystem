function viewEmployees() {
  let sql =
    "SELECT * FROM employeetracker_db.employee LEFT JOIN role on role.id = employee.role_id";
  connection.query(sql, function (err, res) {
    if (err) {
      console.log("Error viewing Employee table");
    }
    if (res) {
      console.table(res);
    }
  });
}

function viewByDept() {
  let sql =
    "SELECT * FROM employeetracker_db.employee LEFT JOIN role on role.id = employee.role_id";
  connection.query(sql, function (err, res) {
    if (err) {
      console.log("Error viewing Sales Department Table");
    }
    if (res) {
      console.table(res);
    }
  });

  // function async updateEmployee() {
  //     console.log('employee');
  //     let query = connection.query(
  //       "UPDATE products SET ? WHERE ?",
  //       [
  //         {
  //           quantity: 100
  //         },
  //         {
  //           flavor: "Rocky Road"
  //         }
  //       ],
  //       function(err, res) {
  //         if (err) throw err;
  //         console.log(res.affectedRows + "employee changed!");
  //       }
  //     );
  //     console.log(query.sql);
}
//function to add employee:
addEmployee();
//function to remove an employee:
removeEmployee();
//function to update an employee role:
updateRole();
//function to update a manager:
updateManager();
