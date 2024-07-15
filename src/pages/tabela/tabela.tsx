import React from "react";
import "../bodycss/body.css";
import "./tabela.css";
import Link from "next/link";

function Tabela() {
  return (
    <div className="tabela-container">
      <header>
        <Link href="/register">
          <button>Registrar</button>
        </Link>
      </header>
      <section className="filtro">
        <h1 className="selecione-periodo"> Selecione o Período:</h1>
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
      <section className="qnt-prd">
        <span className="quantidade-item">Quantidade: {}</span>
        <span className="periodo">Período: {}</span>
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
  );
}

export default Tabela;
