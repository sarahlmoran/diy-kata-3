/* const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find((object) => object.name === employeeName);

  return employee.role;
}; */

const getEmployerRole = (employeeName, employees) =>
  employees.find((object) => object.name === employeeName).role;

module.exports = getEmployerRole;

// created a variable employee that returns the whole object of the inputted employee name
// result {"name": "Javid", "role": "Human Recommended Reading Assistant"}
// added a return employee.role as this returns the role value of the employee object
// result "Human Recommended Reading Assistant"

// the variable employee uses .find() to find the first element in the array with the given argument
// the ((object) => object.name) allows us to access the layer down of the object as it is within an array
// the .name is looking at the name properties
// the object.name === employeeName is checking whether the inputted parameter is the same as the name property in an object and pulling out the first one it finds
// result {"name": "Javid", "role": "Human Recommended Reading Assistant"}

// not sure why I had to make the test into a variable but I suppose it names the object so you can then use the . notation to find a property of that object