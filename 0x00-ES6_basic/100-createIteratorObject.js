export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    * [Symbol.iterator]() {
      while (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employees = currentDepartment;

        while (currentEmployeeIndex < employees.length) {
          yield employees[currentEmployeeIndex];
          currentEmployeeIndex += 1;
        }

        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
      }
    },
  };
}
