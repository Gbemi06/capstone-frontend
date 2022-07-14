import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./components/Registration";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import StudentHomePage from "./components/StudentHomePage";
import TeachersHomePage from "./components/TeachersHomePage";
import AdminHomePage from "./components/AdminHomePage";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import SideBar from "./components/SideBar";
import { Row, Col } from "react-bootstrap";
import Courses from "./components/Courses";
import StudyProgramme from "./components/StudyProgramme";
import Timetable from "./components/Timetable";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public routes */}

              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<LoginPage />} />

              {/* protected routes */}
              <Route element={<RequireAuth roles={["Admin"]} />}>
                <Route path="/Admin" element={<AdminHomePage />} />
              </Route>
              <Route element={<RequireAuth roles={["Admin", "Teacher"]} />}>
                <Route path="/Teacher" element={<TeachersHomePage />} />
              </Route>
              <Route element={<RequireAuth roles={["Admin", "Student"]} />}>
                <Route path="/Student" element={<StudentHomePage />} />
              </Route>

              {/* sidebar route */}

              <Route path="/courses" element={<Courses />} />
              <Route path="/study-programme" element={<StudyProgramme />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/settings" element={<Settings />} />

              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
