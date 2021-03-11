class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  };
};

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(student) {
    const thatStudent = this.students.filter(s => s.email === student.email)
    if (thatStudent.length === 0) {
      console.log(`Registering ${student.email} to the bootcamp ${this.name}`);
      this.students.push(student);
    }
    else {
      console.log(`${student.email} is already registerd to the bootcmap ${this.name}`);
    }
  }
}
