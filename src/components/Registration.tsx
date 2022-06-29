import React, { FormEvent, useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { RegistrationInterface } from "../types/RegistrationInterface";

const Registration = () => {
  const navigate = useNavigate();
  const [sign, setSign] = useState<RegistrationInterface>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchPost();
  };
  const registered = {
    firstName: sign.firstName,
    lastName: sign.lastName,
    username: sign.username,
    email: sign.email,
    password: sign.password,
    confirmPassword: sign.confirmPassword,
    role: sign.role,
  };
  const fetchPost = async () => {
    const response = await fetch("http://localhost:4002/users/register", {
      method: "POST",
      body: JSON.stringify(registered),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let data = await response.json();
      localStorage.setItem("jwtToken", data.token);
      alert("user registration is successfully");
      navigate("/");

      setSign(registered);
    } else {
      console.log("error");
      alert("something went wrong");
    }
  };

  return (
    <div className="container">
      <Container className="signup">
        <Row>
          <Col sm={10}>
            <Form className="form-sign" onSubmit={handleSubmit}>
              <p className="signup-text">Sign Up!</p>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="first name"
                  value={sign.firstName}
                  onChange={(e) =>
                    setSign((sign) => ({
                      ...sign,
                      firstName: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="first name"
                  value={sign.lastName}
                  onChange={(e) =>
                    setSign((sign) => ({ ...sign, lastName: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="username"
                  value={sign.username}
                  onChange={(e) =>
                    setSign((sign) => ({ ...sign, username: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="email"
                  placeholder="Enter email"
                  value={sign.email}
                  onChange={(e) =>
                    setSign((sign) => ({ ...sign, email: e.target.value }))
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="password"
                  placeholder="Password"
                  value={sign.password}
                  onChange={(e) =>
                    setSign((sign) => ({ ...sign, password: e.target.value }))
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="password"
                  placeholder="Confirm Password"
                  value={sign.confirmPassword}
                  onChange={(e) =>
                    setSign((sign) => ({
                      ...sign,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicRole">
                <Form.Label>role</Form.Label>
                <Form.Control
                  className="sign-input"
                  type="text"
                  placeholder="role"
                  value={sign.role}
                  onChange={(e) =>
                    setSign((sign) => ({ ...sign, role: e.target.value }))
                  }
                />
              </Form.Group>

              <Button className="sign_button " variant="primary" type="submit">
                Sign Up
              </Button>
              <Link to="/login">
                <Button className="log_button " variant="success" type="submit">
                  Have an account? LOG IN !
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
