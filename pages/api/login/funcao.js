import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, password } = req.body;
    console.log("Tentativa de login:", { name, password });

    const filePath = path.resolve("data", "users.json");

    if (!fs.existsSync(filePath)) {
      return res
        .status(500)
        .json({ message: "Arquivo de usuários não encontrado." });
    }

    const fileData = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(fileData);

    console.log("Usuários cadastrados:", users);

    const usuario = users.find((user) => user.name === name);

    if (usuario) {
      console.log("Usuário encontrado:", usuario);
    } else {
      console.log("Usuário não encontrado.");
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    if (usuario.password === password) {
      console.log("Login bem-sucedido");
      return res.status(200).json({ token: "fake-jwt-token" });
    } else {
      console.log("Senha incorreta.");
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
  } else {
    return res.status(405).json({ message: "Método não permitido." });
  }
}
