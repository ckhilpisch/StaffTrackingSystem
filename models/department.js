const connection = require('../config/connection');

const Department = function(department) {
  this.connection = connection
};

Department.getAll =() => {
    return connection.query("SELECT * FROM employeetracker_db.department")
};

Department.create = () => {
   return connection.query("INSERT INTO employeetracker_db.department SET ?", 
)};

module.exports = Department;