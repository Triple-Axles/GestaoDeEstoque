"use client";
import React, { useState } from "react";
import axios from "axios";

const RegisterEstabelecimento = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [serial, setSerial] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não correspondem. Tente Novamente");
      return;
    }

    try {
      const response = await axios.post("", {
        name,
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
    <div className="fomrulario-estabelecimento">
      <h2>Registrar Novo Estabelecimento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Estabelecimento:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          Serial:
          <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterEstabelecimento;
