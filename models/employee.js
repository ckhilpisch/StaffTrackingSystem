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

Employee.getManagers = () => {
  return connection.query("SELECT id as value, first_name, last_name, and manager_id !=null FROM employee")
};



Employee.remove = () => {
  return connection.query("DELETE FROM employeeTracker_db.employee WHERE id = ?");
};

module.exports = Employee;
