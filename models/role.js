const sql = require('../config/connection');

const Role = function(role) {
  this.title = role.title;
  this.salary = role.salary;
  this.department = role.department_id
};

Role.getAll = () => {
    sql.query("SELECT * FROM employeetracker_db.role", (err, res) => {
      if (err) {
        console.log("error getting role table");
      } else {
      console.table(res);
      }
    });
  };

  module.exports = Role;