
function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>

      <div className="student-info">
        <p>
          Name: <span className="student-name">{props.name}</span>
        </p>

        <p>
          Department: <span className="student-name">{props.department}</span>
        </p>
      </div>
    </div>
  );
}

export default Student;
