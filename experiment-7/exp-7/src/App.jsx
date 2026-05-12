import React from "react";
import "./App.css";

function Student(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Om Jee Maurya"
        course="CSE"
        marks="85"
      />

      <Student
        name="Naveen Kumar"
        course="IT"
        marks="92"
      />

      <Student
        name="Nilesh Yadav"
        course="ECE"
        marks="78"
      />
    </div>
  );
}

export default App;