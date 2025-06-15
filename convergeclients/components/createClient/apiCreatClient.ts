import { notificationAltert } from "@/alert/Alert";

export function apiCreateClient(users: FormData, data: Date) {
  const titulo = users.get("titulo");
  const name = users.get("NomeCliente");
  const descrição = users.get("descrição");
  const modeloNegocio = users.get("ModeloNegocioCliente");
  const valorContrato = users.get("valorContrato");

  const dataInicio = data ? data.toLocaleDateString() : ""; // Formata a data

  fetch("http://localhost:3000/api/users/createUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      name,
      descrição,
      modeloNegocio,
      valorContrato,
      dataInicio,
    }),
  })
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((data) => {
      if (data.message === "usuario criado") {
        notificationAltert("success", "usuario criado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return;
      } else if (data.message === "Erro ao criar cliente") {
        return notificationAltert("error", "Error ao criar usuario");
      }
    });
}
