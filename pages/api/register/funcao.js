import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, role, password } = req.body;

      const filePath = path.resolve("data", "users.json");

      let users = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf8");
        users = JSON.parse(fileData);
      }

      const userExists = users.some((user) => user.name === name);
      if (userExists) {
        return res.status(400).json({ message: "Usuário já registrado." });
      }

      users.push({ name, role, password });

      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

      return res
        .status(200)
        .json({ message: "Usuário registrado com sucesso!" });
    } else {
      return res.status(405).json({ message: "Método não permitido." });
    }
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao tentar registrar o usuário." });
  }
}
