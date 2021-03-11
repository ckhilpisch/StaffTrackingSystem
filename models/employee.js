const sql = require("../config/connection");

const Employee = function (employee) {
  this.firstname = employee.first_name;
  this.lastname = employee.last_name;
  this.manager = employee.manager_id;
  this.role = employee.role_id;
};

Employee.getAll = () => {
  return sql.query("SELECT * FROM employeetracker_db.employee")
};

Employee.getAllUpdated = () => {
  return sql.query("SELECT first_name, last_name, id FROM employeetracker_db.employee")
};

// Employee.getalllManagers = () => {
//   return sql.query("SELECT first_name, last_name, manager_id"),
// };

Employee.create = (newEmployee, result) => {
  sql.query(
    "INSERT INTO employeetracker_db.employee SET ?",
    newEmployee,
    (err, res) => {
      if (err) {
        console.log("error inserting new employee");
      } else {
        console.log("created employee: ", { id: res.insertId, ...newEmployee });
      }
    }
  );
};

Employee.updateById = (id, firstname, lastname, result) => {
  sql.query(
    "UPDATE employeetaracker_db.employee SET firstname = ?, lastname = ?, role_id = ? WHERE id = ?",
    [employee.firstname, employee.lastname, employee.role_id, id],
    (err, res) => {
      if (err) {
        console.log("error updating employee");
      } else if (res.affectedRows == 0) {
        console.log("no employee to update");
      } else {
        console.log("updated employee: ", { id: id, ...customer });
      }
    }
  );
};

Employee.remove = (id, result) => {
  sql.query(
    "DELETE FROM employeeTracker_db.employee WHERE id = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error deleting employee by id");
      } else if (res.affectedRows == 0) {
        console.log("no change has happened");
      } else if (res) {
        console.log("deleted customer with id: ", id);
      }
    }
  );
};

module.exports = Employee;
