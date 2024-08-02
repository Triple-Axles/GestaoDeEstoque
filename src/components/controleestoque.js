"use client";
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [serial, setSerial] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/register-equipamento", {
        destinatario,
        serial,
      });

      console.log("Dados enviados com sucesso!", response.data);
      setSuccess("Equipamento registrado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setError("Falha no registro. Por favor, tente novamente.");
    }
  };

  return (
    <div className="controle-estoque">
      <h2>Controle de Estoque</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Destinatario:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Escolha destinatario</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Estabelecimento">Estabelecimento</option>
            <option value="Estoque">Estoque</option>
          </select>
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
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
