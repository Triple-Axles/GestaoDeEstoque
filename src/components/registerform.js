"use client";
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não correspondem. Tente Novamente");
      return;
    }

    try {
      const response = await axios.post("api\register\funcao", {
        name,
        role,
        password,
      });

      console.log("Registro bem-sucedido!", response.data);

      router.push("/tabela");
    } catch (error) {
      console.error("Erro no registro:", error);
      setError("Registro falhou. Por favor, tente novamente.");
    }
  };

  return (
    <div className="formulario-registro">
      <h2>Registrar novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Função:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Escolha uma função</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Gerente">Gerente</option>
            <option value="Administrador">Administrador</option>
          </select>
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
