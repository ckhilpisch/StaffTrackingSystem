const connection = require('../config/connection');

const Role = function(role) {
  this.connection = connection
};

Role.getAll = () => {
    return connection.query("SELECT * FROM employeetracker_db.role")
};

Role.getAllUpdated = () => {
  return connection.query("SELECT id as value, title as name FROM employeetracker_db.role")
};

Role.delete = () => {
  return connection.query("SELECT id FROM employeetracker_db.role")

}

  module.exports = Role;