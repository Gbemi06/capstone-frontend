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
import MyProfile from "./components/MyProfile";
import TimetableSetting from "./components/TimetableSetting";
import TeachersHomeSetting from "./components/TeachersHomeSetting";
import StudentHomeSetting from "./components/StudentHomeSetting";
import StudyProgrammeSetting from "./components/StudyProgrammeSetting";
import ProfileSetting from "./components/ProfileSetting";
import CoursesSetting from "./components/CoursesSetting";
import CarouselSetting from "./components/CarouselSetting";

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
              <Route path="/profile" element={<MyProfile />} />

              {/* protected routes */}
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route path="/Admin" element={<AdminHomePage />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route
                element={<RequireAuth AllowedRoles={["Admin", "Teacher"]} />}
              >
                <Route path="/Teacher" element={<TeachersHomePage />} />
              </Route>
              <Route
                element={<RequireAuth AllowedRoles={["Admin", "Student"]} />}
              >
                <Route path="/Student" element={<StudentHomePage />} />
              </Route>

              {/* Admin protected routes */}
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route
                  path="/teacherHomeSetting"
                  element={<TimetableSetting />}
                />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route
                  path="/teacherHomeSetting"
                  element={<TeachersHomeSetting />}
                />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route
                  path="/studentHomeSetting"
                  element={<StudentHomeSetting />}
                />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route
                  path="/studyProgrammeSetting"
                  element={<StudyProgrammeSetting />}
                />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route path="/profileSetting" element={<ProfileSetting />} />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route path="/coursesSetting" element={<CoursesSetting />} />
              </Route>
              <Route element={<RequireAuth AllowedRoles={["Admin"]} />}>
                <Route path="/carousel" element={<CarouselSetting />} />
              </Route>

              {/* sidebar route */}

              <Route path="/courses" element={<Courses />} />
              <Route path="/study-programme" element={<StudyProgramme />} />
              <Route path="/timetable" element={<Timetable />} />

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
