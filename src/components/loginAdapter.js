import axios from "axios";

export async function loginAdapter(name, password) {
  try {
    const response = await axios.post("/api/login/funcao.js", {
      name,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Nome de usuário ou senha incorretos.");
    } else {
      throw new Error("Falha no login: " + error.message);
    }
  }
}
