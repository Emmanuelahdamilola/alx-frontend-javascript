export default function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  const studentFiltered = studentList.filter((student) => student.location === city);

  return studentFiltered;
}
