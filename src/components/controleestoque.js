"use client";
import React, { useState } from "react";
import axios from "axios";

function ControleDeEstoque() {
  const [role, setRole] = useState("");
  const [tipoEquipamento, setTipoEquipamento] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleTipoEquipamentoChange = (event) => {
    const selectedType = event.target.value;
    setTipoEquipamento(selectedType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!role | !tipoEquipamento) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("api/register/equipamentos", {
        tipoEquipamento,
        serial,
        destinatario: role,
      });
      setSuccess("Equipamento registrado com sucesso!");
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      setError("Erro ao registrar o equipamento.");
      console.error("Erro ao enviar a requisição:", error);
    }
  };

  return (
    <div className="controle-estoque">
      <h2>Controle de Estoque</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Destinatário:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </label>

        <label>
          Tipo de Equipamento:
          <select
            value={tipoEquipamento}
            onChange={handleTipoEquipamentoChange}
            required
          >
            <option value="POS">POS</option>
            <option value="TABLET">TABLET</option>
            <option value="CELULAR">Celular</option>
          </select>
        </label>

        <label>
          Serial:
          <input type="text" value="" readOnly required />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ControleDeEstoque;
