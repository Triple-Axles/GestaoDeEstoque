"use client";
import React, { useState } from "react";
import "../bodycss/body.css";
import "./tabela-estabelecimento.css";
import Link from "next/link";

function Tabela2() {
  return (
    <div className="botao-register-estabelecimento">
      <header className="tabela-estabelecimento">
        <Link href="/registerestabelecimento">
          <button>Novo Estabelecimento</button>
        </Link>
        <Link href="/controledeequipamentos">
          <button>Enviar Equipamento</button>
        </Link>
      </header>

      <div className="tabela-estabelecimento-container">
        <section className="qnt-prd">
          <span className="quantidade-item-estabelecimento">
            Quantidade: {}
          </span>
        </section>
        <section className="tabela-colunas">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Serial</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td>Nome {index + 1}</td>
                  <td>Serial {index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="navegação-estabelecimento">
            <button>Anterior</button>
            <span>Página 1 de 99</span>
            <button>Próximo</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tabela2;
