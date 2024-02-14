export default function getStudentsByLocation(studentList) {
  if (!Array.isArray(studentList)) {
    return 0;
  }

  const studentReduced = studentList.reduce((accum, student) => accum + student.id, 0);

  return studentReduced;
}
