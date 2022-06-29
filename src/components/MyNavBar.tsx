import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { RegistrationInterface } from "../types/RegistrationInterface";

interface DataProps {
  data: any;
}

function MyNavBar({ data }: DataProps) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Epicode University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            <NavDropdown.Item href="/login">LogIn</NavDropdown.Item>
            <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Text className="mx-2">
            Signed in as:{" "}
            <a href="#login">
              {data?.firstName} {""} {data?.lastName}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
