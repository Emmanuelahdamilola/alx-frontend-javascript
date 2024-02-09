export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new Error('Invalid attribute type');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = (newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = (newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
