"use client";
import React, { useState } from "react";
import "../bodycss/body.css";
import "../tabela/tabela.css";
import Link from "next/link";

function Tabela() {
  // Estados para armazenar as datas escolhidas
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 103;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = Array.from({ length: totalItems }, (_, index) => ({
    tipo: `Tipo ${index + 1}`,
    serial: `Serial ${index + 1}`,
    local: `Local ${index + 1}`,
  })).slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
            <label className="período">Período Inicial:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="botoes-filtro">
            <label className="período">Período Final:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="procurar">
            <button
              onClick={() => console.log(`Periodo: ${startDate} - ${endDate}`)}
            >
              Procurar
            </button>
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
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.tipo}</td>
                  <td>{item.serial}</td>
                  <td>{item.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="navegação">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Próximo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tabela;
