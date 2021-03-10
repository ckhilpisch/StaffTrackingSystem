const sql = require('../config/connection');

const Department = function(department) {
  this.name = deparment.name;
};

Department.getAll =( ) => {
    return sql.query("SELECT * FROM employeetracker_db.department")
};

Department.create = (newDepartment, answer) => {
    sql.query("INSERT INTO employeetracker_db.department SET ?", newDewpartment, (err, res) => {
      if (err) {
        console.log("Couldn't insert new department");
      } else if (res) {
        console.log("created Department: ", { id: res.insertId, ...newDepartment });
       }
    });
};



module.exports = Department;