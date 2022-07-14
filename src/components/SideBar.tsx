import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

let Prom;

function SideBar() {
  const location = useLocation();

  return (
    <Container className="sideBar-main">
      <section className="sideBar-link">
        <Link to="/">
          <div
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/courses">
          <div
            className={
              location.pathname === "/Courses" ? "nav-link active" : "nav-link"
            }
          >
            Courses
          </div>
        </Link>
        <Link to="/study-programme">
          <div
            className={
              location.pathname === "/Study-programme"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Study Programme
          </div>
        </Link>
        <Link to="/timetable">
          <div
            className={
              location.pathname === "/timetable"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Timetable
          </div>
        </Link>
        <Link to="/settings">
          <div
            className={
              location.pathname === "/settings" ? "nav-link active" : "nav-link"
            }
          >
            Settings
          </div>
        </Link>
      </section>
    </Container>
  );
}

export default SideBar;
