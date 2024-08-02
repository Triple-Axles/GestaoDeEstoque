"use client";
import React, { useState } from "react";
import "../bodycss/body.css";
import "./tabela.css";
import DatePicker from "react-datepicker";
import "./pickerdate.css";
import Link from "next/link";

function Tabela() {
  /* const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartPicker, setShowStartPicker] = useState<boolean>(false);
  const [showEndPicker, setShowEndPicker] = useState<boolean>(false); */

  return (
    <div className="botao-register-cadastro">
      <header>
        <Link href="/controleestoque">
          <button>Controle de Estoque</button>
        </Link>
        <Link href="/registrousuario">
          <button>Registrar novo Usuário</button>
        </Link>
        <Link href="/tabeladeestabelecimento">
          <button>Estabelecimento</button>
        </Link>
      </header>
      <div className="tabela-container">
        <section className="filtro">
          <h1 className="selecione-periodo">Selecione o Período:</h1>
          <div className="botoes-filtro">
            <button>Período Inicial</button>
          </div>
          <div className="botoes-filtro">
            <button>Período Final</button>
          </div>
          <div className="procurar">
            <button>Procurar</button>
          </div>
        </section>
        <section className="tabela-colunas">
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Serial</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td>Tipo {index + 1}</td>
                  <td>Serial {index + 1}</td>
                  <td>Local {index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="navegação">
            <button>Anterior</button>
            <span>Página 1 de 99</span>
            <button>Próximo</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tabela;
