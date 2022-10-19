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

        <div>
          <h3>Course setting</h3>
          <div>
            <button onClick={() => navigate("/coursesSetting")}>Courses</button>
          </div>
        </div>
        <hr />
        <div>
          <h3>Carousel setting</h3>
          <div>
            <button onClick={() => navigate("/carousel")}>Carousel</button>
          </div>
        </div>
        <hr />
        <div>
          <h3>User setting</h3>
          <div>
            <button onClick={() => navigate("/user")}>User</button>
          </div>
        </div>
        <hr />
        <div>
          <h3> General Setting</h3>
          <div>
            <button onClick={() => navigate("/settings")}>Setting </button>
          </div>
        </div>
        <hr />
        <div>
          <h3> Profile Setting</h3>
          <div>
            <button onClick={() => navigate("/profileSetting")}>Profile</button>
          </div>
        </div>
        <hr />
        <div>
          <h3> Teachers Home Setting</h3>
          <div>
            <button onClick={() => navigate("/teacherHomeSetting")}>
              Teachers Home Setting
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3> Timetable Setting</h3>
          <div>
            <button onClick={() => navigate("/timetableSetting")}>
              Timetable Setting
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3> Study Programme Setting</h3>
          <div>
            <button onClick={() => navigate("/studyProgrammeSetting")}>
              Study Programme
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h3> Student Home Setting</h3>
          <div>
            <button onClick={() => navigate("/studentHomeSetting")}>
              Student Home
            </button>
          </div>
        </div>
        <hr />
      </Container>
    </div>
  );
}

export default AdminHomePage;
