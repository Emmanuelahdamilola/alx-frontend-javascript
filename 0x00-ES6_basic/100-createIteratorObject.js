export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]: function* () {
      while (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employees = currentDepartment; // This line might be the issue

        while (currentEmployeeIndex < employees.length) {
          yield employees[currentEmployeeIndex];
          currentEmployeeIndex++;
        }

        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }
    },
  };
}
