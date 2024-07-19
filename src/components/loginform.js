import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/login", {
        name,
        password,
      });

      const token = response.data.token;
      console.log("Login bem-sucedido!", token);

      localStorage.setItem("token", token);

      window.location.href = "/tabela";
    } catch (error) {
      console.error("Erro no login:", error);
      setError(
        "Login falhou. Por favor, verifique se seu Nome de Usuário e sua Senha estão corretas."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formulario">
        <label htmlFor="Nome">Usuário:</label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="formulario">
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
