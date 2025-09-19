// PersonHierarchy.jsx
import React from "react";
import "./App.css";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getInfo() {
    return `${super.getInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${super.getInfo()}, Subject: ${this.subject}`;
  }
}

// React Component
const PersonHierarchy = () => {
  const student = new Student("Amit Singh", 21, "Computer Science");
  const teacher = new Teacher("Mrs. Sharma", 40, "Mathematics");

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>
      <div className="card">
        <h2>Student</h2>
        <p>{student.getInfo()}</p>
      </div>
      <div className="card">
        <h2>Teacher</h2>
        <p>{teacher.getInfo()}</p>
      </div>
    </div>
  );
};

export default PersonHierarchy;
