const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find((object) => object.name === employeeName);

  return employee.role;
};
module.exports = getEmployerRole;


// when you input a name it returns the role

//   return employees.map((object) => object)
//  .find((object1) => object1.role);
//  return employees.role;