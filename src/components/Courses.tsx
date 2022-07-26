import React, { useEffect, useState } from "react";
import { ListGroupItem } from "react-bootstrap";

function Courses() {
  useEffect(() => {
    getCourses();
  }, []);

  const [courses, setCourses] = useState<any[]>([]);

  const getCourses = async () => {
    let response = await fetch("http://localhost:4002/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });
    let data = await response.json();
    console.log(data);
    setCourses(data);
  };
  console.log(courses);
  return (
    <div>
      <h1>Courses</h1>
      <div className="row">
        {courses.map((course) => {
          return (
            <ListGroupItem key={course._id}>
              <h3>{course.courseName}</h3>
            </ListGroupItem>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
