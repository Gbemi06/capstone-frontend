import React, { useState, useEffect, FormEvent } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginInterface } from "../types/RegistrationInterface";

const initLogin = {
  username: "",
  password: "",
};
const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<LoginInterface>(initLogin);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchLogin();
  };
  //   =============GET===========================

  const fetchLogin = async () => {
    try {
      const response = await fetch("http://localhost:4002/users/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("pass");
        let data = await response.json();
        localStorage.setItem("jwtToken", data.token);
        console.log(data);
        navigate(`/${data.role}`);
      } else {
        alert("wrong username or password ");
      }

      setLogin(initLogin);
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <Container className="login">
          <Row>
            <Col md={6} className=" my-5">
              <Form className="form" onSubmit={handleSubmit}>
                <h4 className="log-text">LogIn</h4>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    placeholder="Enter your Username"
                    value={login.username}
                    onChange={(e) =>
                      setLogin((login) => ({
                        ...login,
                        username: e.target.value,
                      }))
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={(e) =>
                      setLogin((login) => ({
                        ...login,
                        password: e.target.value,
                      }))
                    }
                  />
                </Form.Group>

                <Button
                  className="login_button"
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
                <Link to="/register">
                  <Button
                    className="button-sign"
                    variant="warning"
                    type="submit"
                  >
                    Do not have an account? Sign up
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LoginPage;
