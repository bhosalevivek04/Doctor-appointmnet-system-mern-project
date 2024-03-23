//Login.js
import React, { useState } from "react";
import "../styles/LoginStyles.css";
import { Form, Input, Button, message, Spin } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      dispatch(showLoading());
      setLoading(true);

      const res = await axios.post("/api/v1/user/login", values);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      dispatch(hideLoading());
    }
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={handleLogin} className="login-form">
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="Email" name="email" required>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" required>
          <Input type="password" />
        </Form.Item>

        <Link to="/register" className="register-link">
          Not registered? Register here.
        </Link>

        <Button
          type="primary"
          htmlType="submit"
          className="login-button"
          loading={loading}
        >
          {loading ? <Spin /> : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
