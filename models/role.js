const sql = require('../config/connection');

const Role = function(role) {
  this.title = role.title;
  this.salary = role.salary;
  this.department = role.department_id
};

Role.getAll = () => {
    return sql.query("SELECT * FROM employeetracker_db.role")
};

Role.getAllUpdated = () => {
  return sql.query("SELECT title, id FROM employeetracker_db.role")
};

  module.exports = Role;