import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, role, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      role,
      password: hashedPassword,
    };

    console.log("Novo usuário registrado:", newUser);

    return res.status(201).json({ message: "Registro bem-sucedido!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
