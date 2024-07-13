import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="formulario">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="USER"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="formulario">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="PASSWORD"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
