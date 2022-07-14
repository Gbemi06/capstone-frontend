import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import MainPage from "./MainPage";
import MyCarousel from "./MyCarousel";

function Home() {
  const location = useLocation();
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Navbar.Brand href="/">Epicode-University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/Admin">
              <div
                className={
                  location.pathname === "/Admin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Admin
              </div>
            </Link>
            <Link to="/Teacher">
              <div
                className={
                  location.pathname === "/Teacher"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Teacher
              </div>
            </Link>
            <Link to="/Student">
              <div
                className={
                  location.pathname === "/Student"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Student
              </div>
            </Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">login</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/">logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <MyCarousel />
      <Row>
        <Col md={10} className="mt-3">
          <MainPage />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
