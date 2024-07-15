import React from "react";
import "./login.css";
import "../bodycss/body.css";
import Link from "next/link";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="formulario">
            <label htmlFor="username">Nome de Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="formulario">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <Link href="/tabela">
            <button type="submit">Entrar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
