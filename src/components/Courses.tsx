import React, { useEffect } from "react";

function Courses() {
  useEffect(() => {
    getCourses();
  }, []);

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
  };
  return <div>Courses</div>;
}

export default Courses;
