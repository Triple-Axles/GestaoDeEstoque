import React from "react";
import "./controle.css";
import "../bodycss/body.css";

function Register() {
  return (
    <div className="controle">
      <h2>Controle de Equipamentos</h2>
      <label>
        Destinatario:
        <select onChange={(e) => e.target.value} required>
          <option value="">Selecione uma opção</option>
          <option value="op1">Opção 1</option>
          <option value="op2">Opção 2</option>
          <option value="op3">Opção 3</option>
        </select>
      </label>
      <label>
        Local de recebimento:
        <select onChange={(e) => e.target.value} required>
          <option value="">Selecione uma opção</option>
          <option value="op1">Opção 1</option>
          <option value="op2">Opção 2</option>
          <option value="op3">Opção 3</option>
        </select>
      </label>
      <label>
        Serial:
        <input type="text" onChange={(e) => e.target.value} required />
      </label>
      <button type="submit">Enviar</button>
    </div>
  );
}

export default Register;
