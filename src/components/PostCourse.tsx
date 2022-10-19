import React, { FormEvent, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CourseInterface } from "../types/RegistrationInterface";

const initCourse = {
  courseName: "",
  courseCode: "",
  department: "",
  description: "",
  credits: "",
  prerequisites: "",
  term: "",
  year: "",
  instructor: "",
};

function PostCourse() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [coursePost, setCoursePost] = useState<CourseInterface>(initCourse);

  // const clearForm = () => {
  //   setCoursePost(initCourse);
  // }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getCourses();
  };

  // const [coursePost, setCoursePost] = useState<CourseInterface>(initCourse);

  const getCourses = async () => {
    try {
      let response = await fetch("http://localhost:4002/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(coursePost),
      });
      if (response.ok) {
        alert("Course Uploaded Successfully");
        let data = await response.json();
        console.log(data);
        setCoursePost(data);
      } else {
        alert("Error Uploading Course");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="login">
      <Row>
        <Col md={6} className=" my-5">
          <Form className="form" onSubmit={handleSubmit}>
            <h4 className="log-text">Post A New Course</h4>
            <Form.Group controlId="formBasicCourseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Course Name"
                // ref={userRef}
                value={coursePost.courseName}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    courseName: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCourseCode">
              <Form.Label>Course Code</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Course Code"
                // ref={userRef}
                value={coursePost.courseCode}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    courseCode: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Department"
                // ref={userRef}
                value={coursePost.department}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    department: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Description"
                // ref={userRef}
                value={coursePost.description}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    description: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCredits">
              <Form.Label>Credits</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Credits"
                // ref={userRef}
                value={coursePost.credits}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    credits: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrerequisites">
              <Form.Label>Course Prerequisites</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Prerequisites"
                // ref={userRef}
                value={coursePost.prerequisites}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    prerequisites: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicTerm">
              <Form.Label>Term</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Term"
                // ref={userRef}
                value={coursePost.term}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    term: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Year"
                // ref={userRef}
                value={coursePost.year}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    year: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicInstructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter your Instructor"
                // ref={userRef}
                value={coursePost.instructor}
                onChange={(e) =>
                  setCoursePost(() => ({
                    ...coursePost,
                    instructor: e.target.value,
                  }))
                }
                required
              />
            </Form.Group>

            <div className="mx-2">
              <Button className="login_button" variant="primary" type="submit">
                Submit
              </Button>
              <Button
                className="button-sign"
                variant="warning"
                // onClick={clearForm}
              >
                Clear Form
              </Button>
              <Link to="/register">
                <Button
                  className="button-sign"
                  variant="warning"
                  onClick={goBack}
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PostCourse;
