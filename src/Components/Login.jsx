import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAsync, loginWithGoogle } from "../Servise/action/auth.action";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import "../Components/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.userReducer);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(inputData));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <div className="login-container">
        <h2>Login Your Account</h2>
        {error ? <p className="error-message">❌ {error}</p> : ""}

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="form-label">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                value={inputData.email}
                onChange={handleChanged}
                placeholder="Enter Email"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2" className="form-label">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                name="password"
                value={inputData.password}
                onChange={handleChanged}
                placeholder="Enter Password"
                required
              />
            </Col>
          </Form.Group>

          <Button type="submit" variant="secondary" className="btn-signin">
            🔑 Sign In
          </Button>
        </Form>
        <br />
        <Button variant="success" onClick={handleGoogleLogin} className="btn-google">
          <FaGoogle className="google-icon" />   Login with Google
        </Button>

        <p>
          🆕 Create a new account?{" "}
          <Link to="/signup">Register Now</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
