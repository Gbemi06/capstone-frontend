import React, {
  useState,
  useEffect,
  FormEvent,
  useRef,
  useContext,
} from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/authProvider";
import useAuth from "../hooks/useAuth";
import { LoginInterface } from "../types/RegistrationInterface";

const initLogin = {
  username: "",
  password: "",
};

const LoginPage = () => {
  // const { setAuth } = useContext(AuthContext);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || { from: { pathname: "/" } };
  // const [loginData, setLoginData] = useState<LoginInterface>(initLogin);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  //console.log(myContext?.auth)
  // const navigate = useNavigate();

  // const location = useLocation();
  // const from = location.pathname || "/";
  // const userRef = useRef();
  // const errorRef = useRef();

  const [login, setLogin] = useState<LoginInterface>(initLogin);
  // const [errMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setError("");
  }, [initLogin]);

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
        alert("Login Successful");
        let data = await response.json();
        localStorage.setItem("jwtToken", data.token);
        console.log(data);
        const accessToken = data?.token;
        const role = data?.role;
        setAuth({ login, role, accessToken });
        // navigate(from);
        navigate(`/${data.role}`);
      } else {
        alert("wrong username or password ");
      }

      // setLogin(initLogin);
    } catch (error) {}
  };

  return (
    <>
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
                  // ref={userRef}
                  value={login.username}
                  onChange={(e) =>
                    setLogin((login) => ({
                      ...login,
                      username: e.target.value,
                    }))
                  }
                  required
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
                  required
                />
              </Form.Group>

              <Button className="login_button" variant="primary" type="submit">
                Log In
              </Button>
              <Link to="/register">
                <Button className="button-sign" variant="warning" type="submit">
                  Do not have an account? Sign up
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
};
export default LoginPage;
