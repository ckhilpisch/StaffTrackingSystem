const sql = require('../config/connection');

const Department = function(department) {
  this.name = deparment.name;
};

Department.getAll =() => {
    return sql.query("SELECT * FROM employeetracker_db.department")
};

Department.create = () => {
    sql.query("INSERT INTO employeetracker_db.department SET ?", 
      { name: answers.addDept}
  
    )};

module.exports = Department;