const StudentModel = require('../../models/student/StudentModel');

let students = [
  { _id: 0, name: 'Jefferson', course: 'Sistemas de Informação', ira: 7.5 },
  { _id: 1, name: 'Wladimir', course: 'Design Digital', ira: 5.8 },
  { _id: 2, name: 'Aragão', course: 'Matemática Industrial', ira: 9.5 },
];

let _id = 3;

class StudentService {
  static register(data) {
    let student = new StudentModel(_id++, data.name, data.course, data.ira);
    students.push(student);
    return student;
  }

  static list() {
    return students;
  }

  static update(_id, data) {
    for (let e of students) {
      if (e._id == _id) {
        e.name = data.name;
        e.course = data.course;
        e.ira = data.ira;
        return e;
      }
    }
    return null;
  }

  static delete(_id) {
    for (let i = 0; i < students.length; i++) {
      if (students[i]._id == _id) {
        students.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static retrieve(_id) {
    for (let i = 0; i < students.length; i++) {
      if (students[i]._id == _id) {
        return students[i];
      }
    }
    return {};
  }
}

module.exports = StudentService;
