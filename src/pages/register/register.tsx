import React from "react";
import "../bodycss/body.css";
import "./register.css";
import Link from "next/link";

function Register() {
  return (
    <div className="formulario-registro">
      <h2>Registro</h2>
      <label>
        Nome:
        <input type="text" onChange={(e) => e.target.value} required />
      </label>
      <label>
        Função:
        <select onChange={(e) => e.target.value} required>
          <option value="">Escolha uma função</option>
          <option value="op1">Opção 1</option>
          <option value="op2">Opção 2</option>
          <option value="op3">Opção 3</option>
        </select>
      </label>
      <label>
        Senha:
        <input type="password" onChange={(e) => e.target.value} required />
      </label>
      <label>
        Confirmar Senha:
        <input type="password" onChange={(e) => e.target.value} required />
      </label>
      <button type="submit">Registrar</button>
    </div>
  );
}

export default Register;
