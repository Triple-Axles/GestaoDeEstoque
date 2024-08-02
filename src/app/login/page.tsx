"use client";
import React from "react";
import "./login.css";
import "../bodycss/body.css";
import LoginForm from "../../components/loginform";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
