import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegistrationInterface } from "../types/RegistrationInterface";
import MyNavBar from "./MyNavBar";
import PostCourse from "./PostCourse";

function AdminHomePage() {
  const navigate = useNavigate();
  // const [select, setSelect] = useState(false);

  const [currentUser, setCurrentUser] = useState<RegistrationInterface | null>(
    null
  );

  useEffect(() => {
    fetchUserData();
  }, []);
  // ==================FETCH========================
  const fetchUserData = async () => {
    const response = await fetch("http://localhost:4002/users/register/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });

    if (response.ok) {
      const data = (await response.json()) as RegistrationInterface;
      console.log(data);
      setCurrentUser(data);
    }
  };
  return (
    <div>
      <MyNavBar currentUser={currentUser} />
      <Container fluid>
        <div>
          AdminHomePage
          <div>You are logged in as a {currentUser?.role}</div>
        </div>
        <Row>
          <Col md={3}>
            <div>
              <h3>Course setting</h3>
              <div>
                <button onClick={() => navigate("/courses")}>Courses</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h3>Carousel setting</h3>
              <div>
                <button onClick={() => navigate("/carousel")}>Carousel</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h3>User setting</h3>
              <div>
                <button onClick={() => navigate("/user")}>User</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <h3> setting</h3>
              <div>
                <button onClick={() => navigate("/settings")}>Courses</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminHomePage;
