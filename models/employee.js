const connection = require("../config/connection");
const inquirer = require("inquirer");

const Employee = function () {
  this.connection = connection
};


Employee.getAll = () => {
  return connection.query("SELECT * FROM employeetracker_db.employee")
};

Employee.getAllUpdated = () => {
  return connection.query("SELECT first_name, last_name, id FROM employeetracker_db.employee")
};

Employee.create = () => {
  return connection.query(
    "INSERT INTO employeetracker_db.employee SET ???");
};


Employee.remove = () => {
  return connection.query("DELETE FROM employeeTracker_db.employee WHERE id = ?");
};

module.exports = Employee;
