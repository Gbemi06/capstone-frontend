import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../context/authProvider";
import { RegistrationInterface } from "../types/RegistrationInterface";
import { useLocation, Link } from "react-router-dom";

interface DataProps {
  currentUser: RegistrationInterface | null;
}

const logout = () => {
  localStorage.removeItem("jwtToken");
};

function MyNavBar({ currentUser }: DataProps) {
  // const { currentUser }  = useContext(AuthContext)
  const location = useLocation();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Epicode University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
            <Link to="/Admin">
              <div
                className={
                  location.pathname === "/courses"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Courses
              </div>
            </Link>
          </Nav>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            <NavDropdown.Item href="/login">LogIn</NavDropdown.Item>
            <NavDropdown.Item onClick={logout} href="/">
              LogOut
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Text className="mx-2">
            Signed in as:{" "}
            <Link to="/profile">
              {currentUser?.firstName} {""} {currentUser?.lastName}
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
