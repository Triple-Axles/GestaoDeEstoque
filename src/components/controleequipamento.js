"use client";
import React, { useState } from "react";
import axios from "axios";

function ControleDeEquipamentos() {
  const [estabelecimento, setestabelecimento] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/register-equipamento", {
        estabelecimento,
        serial,
      });

      console.log("Equipamentos enviados com sucesso!", response.data);
      setSuccess("Equipamento enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar equipamentos:", error);
      setError("Falha no envio. Por favor, tente novamente.");
    }
  };

  return (
    <div className="controle-equipamentos">
      <h2>Controle de Equipamentos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Estabelecimento:
          <input
            type="text"
            value={estabelecimento}
            onChange={(e) => setestabelecimento(e.target.value)}
            required
          />
        </label>
        <label>
          Tipo de Equipamento:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="POS">POS</option>
            <option value="Tablet">Tablete</option>
          </select>
        </label>
        <label>
          Serial:
          <input
            type="text"
            value={""}
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

export default ControleDeEquipamentos;
