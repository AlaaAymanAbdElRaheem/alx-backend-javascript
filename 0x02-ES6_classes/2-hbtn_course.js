class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint-disable */

    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (Array.isArray(students) === false) {
      throw TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) === false) {
      throw TypeError('Students must be an array');
    } else {
      this._students = newStudents;
    }
  }
}

export default HolbertonCourse;
